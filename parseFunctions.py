import json
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import * 


point2mm =  0.352778
def read_lyrx(file=None):    
    with open(file, mode="r", encoding="utf-8") as json_file:  
        data = json.load(json_file)
        #print(data)    
    return data
        
#%% 

def readValueDef(obj):
    return obj['symbol']['symbol']['symbolLayers']
    
def checkSymbolType(obj):    
    obj_arr = {}
    for o in obj:       
        if not 'desc' in obj_arr  :
            obj_arr['desc'] = []
        type = o['type']    
        if  not type in obj_arr  :
            obj_arr[type] = 0
        obj_arr[type] = obj_arr[type] + 1
        obj_arr['desc'].append(o)
    
    if 'CIMHatchFill' in obj_arr:
        obj_arr['template'] = 'hatch'
        obj_arr['template_hatch_num'] = obj_arr['CIMHatchFill']        
    else:
        obj_arr['template'] = 'simple'
        
    if 'CIMLineSymbol' in obj_arr:
        obj_arr['template_line_num'] = obj_arr['CIMLineSymbol']        
    if 'CIMSolidFill' in obj_arr:
        obj_arr['template_solid_num'] = obj_arr['CIMSolidFill']
    if 'CIMSolidStroke' in obj_arr:
        obj_arr['template_stroke_num'] = obj_arr['CIMSolidStroke']
    
    return obj_arr

def parseSymbolLayerSolidFill(layers):
    colors = []
    for l in layers:
        if l['type'] == 'CIMSolidFill':            
            temp_color = l['color']['values']
            new_color = colorToRgbArray(temp_color, l['color']['type'])
            colors.append(new_color)
    
    return colors
    
def parseSolidFill(obj):    
    symbol = ""
    i = 0
    for ls in obj['desc']:
        if ls['type'] == 'CIMSolidFill':
            temp_color = ls['color']['values']
            new_color = colorToRgbArray(temp_color, ls['color']['type'])            
            symbol = QgsSymbol.defaultSymbol(layer.geometryType())
            symbol.setColor(new_color)            
            i = i + 1

    # Add default shape fill.
    if symbol == '':
            symbol = QgsSymbol.defaultSymbol(layer.geometryType())
            new_color = colorToRgbArray([255,255,255,0], 'CIMRGBColor')
            symbol.setColor(new_color)

    return symbol

def parseStroke(obj, symb):                
    layers = []
    i = 0
    for ls in obj['desc']:
        #print(ls)
        if ls['type'] == 'CIMSolidStroke':
            temp_color = ls['color']['values']
            new_color = colorToRgbArray(temp_color, ls['color']['type'])
            #stroke_width = ls['width'] if ls['width'] < 2 else ls['width']*point2mm             
            stroke_width = ls['width']*point2mm             
            if  i == 0 and  geometry_general_type_str == 'point':
                #print(geometry_general_type_str)
                if not geometry_general_type_str == 'line':
                    symb.symbolLayer(0).setStrokeColor(new_color)
                    symb.symbolLayer(0).setStrokeWidth(stroke_width)                
                else:
                    symb.symbolLayer(0).setColor(new_color)
                    symb.symbolLayer(0).setWidth(stroke_width)                
            else :
                print("Another stroke layer")
                # Add simple line symbol layer (stroke)
                #if not geometry_general_type_str == 'line':
                symbol_layer = QgsSimpleLineSymbolLayer()
                #else:
                    #symbol_layer = QgsMarkerLineSymbolLayer()
                symbol_layer.setColor(new_color)
                symbol_layer.setWidth(stroke_width)
                # TODO: Check offset def (in poly etc)
                symbol_layer.setOffset(stroke_width/2)
                # TODO: Read join and shape
                if not geometry_general_type_str == 'line':
                    symbol_layer.setPenJoinStyle(0)
                symb.appendSymbolLayer(symbol_layer)            
            i = i + 1            
    
    return symb   

def parseLineFill(obj):
    isDoubleHatch = False
    isOffsetEqFirstWidth = True 
    symbol = ""
    layers = []
    i = 0
    first_width = 0
    prev_hatch = 0
    for ls in obj['desc']:        
        if ls['type'] == 'CIMHatchFill':            
            symb_def = ls['lineSymbol']['symbolLayers'][0]
            # New definitions
            angle = ls['rotation'] if 'rotation' in ls else 0            
            temp_color = symb_def['color']['values']
            new_color = colorToRgbArray(temp_color, symb_def['color']['type'])
            # Hatch definitions
            fill_width = symb_def['width'] if 'width' in symb_def else 1
            fill_width = fill_width*point2mm
            fill_distance = ls['separation'] if 'separation' in ls else 0
            fill_distance = fill_distance*point2mm
            fill_offset = ls['offsetX'] if 'offsetX' in ls else 0
            fill_offset = fill_offset*point2mm
            # Create symbol
            symbol_layer = QgsLinePatternFillSymbolLayer()
            symbol_layer.setColor(new_color)
            symbol_layer.setLineAngle(angle)
            symbol_layer.setLineWidth(fill_width)
            symbol_layer.setDistance(fill_distance)            
            # Tweak save the first hatch width and use as offset
            # TODO: Real fix, mark problematic files and unusual offsets
            if prev_hatch > 0 :
                symbol_layer.setLineWidth(fill_width)
                symbol_layer.setOffset(fill_width)
                isOffsetEqFirstWidth = fill_width == prev_hatch
                isDoubleHatch = True

            layers.append(symbol_layer)
            if i == 0:
                prev_hatch = fill_width
            i = i + 1
                
    if len(layers) > 0:
        return layers
    else:
        return symbol
    
def cmyk2Rgb(cmyk_array):
    c = cmyk_array[0]
    m  = cmyk_array[1]
    y  = cmyk_array[2]
    k  = cmyk_array[3]
    
    r = int((1 - ((c + k)/100)) * 255)
    g = int((1 - ((m + k)/100)) * 255)
    b = int((1 - ((y + k)/100)) * 255)
    
    return [r, g, b]

def colorToRgbArray(color_array, type):
    new_color = QColor.fromRgb(color_array[0],color_array[1], color_array[2])        
    if type == 'CIMHSVColor':
        new_color = QColor.fromHsvF(color_array[0]/360,color_array[1]/100, color_array[2]/100,1)
    elif type == 'CIMCMYKColor':
        temp_color = cmyk2Rgb(color_array)
        new_color = QColor.fromRgb(temp_color[0],temp_color[1], temp_color[2])
    
    return new_color

def parseSimpleRenderer(obj):
    #for a in obj:
    #    print(a)
    symbol = ''
    symb_def = obj['symbol']['symbol']['symbolLayers'][0]
    #for ob in symb_def:
        #print(ob)
    if 'characterIndex' in symb_def and symb_def['type'] == 'CIMCharacterMarker':
        symbol = parseCharacterFill(symb_def, 0)
        
                
    return symbol

def parseCharacterFill(symb_def, max_size):
    symbol = QgsFontMarkerSymbolLayer()
    
        
    symbol.setFontFamily(symb_def['fontFamilyName'])
    symbol.setCharacter(chr(symb_def['characterIndex']))
    new_size = symb_def['size']*point2mm
    symbol.setSize(symb_def['size']*point2mm)
    #symbol.markerOffsetWithWidthAndHeight()
    if 'rotation' in symb_def:
        new_angle = symb_def['rotation']
        if new_angle < 0:
            new_angle = abs(new_angle)
        elif new_angle > 180:
            new_angle = 360 - new_angle
        #new_angle = 360 - abs(symb_def['rotation']) if symb_def['rotation'] < 0 or symb_def['rotation'] > 180 else symb_def['rotation']
        #print(new_angle)
        #print(symb_def['rotation'])
        symbol.setAngle(new_angle)
        # Fix offset - rotation twaek
        #symbol.setOffset(QPointF(0.3,0.0))
        #offset_tweak = (max_size - new_size)/2 if max_size > new_size else 0
        #print(offset_tweak)
        #if offset_tweak > 0:
        #    symbol.setOffset(QPointF(0,0))
    #print(symb_def['characterIndex'])
    if 'symbol' in symb_def and geometry_general_type_str == 'point':
        if 'symbolLayers' in symb_def['symbol']:
            color = parseSymbolLayerSolidFill(symb_def['symbol']['symbolLayers'])
            print(color)
            symbol.setColor(color[0])
    if not geometry_general_type_str == 'point':
        symbol_base = QgsPointPatternFillSymbolLayer()
        symb_wrap = QgsSymbol.defaultSymbol(layer.geometryType())
        symb_wrap.appendSymbolLayer(symbol)
        print(symb_wrap.symbolLayers())
        print(symbol.layerType())
        print(symbol_base.layerType())
        symbol_base.setSubSymbol(symb_wrap)
        return symbol_base
    else:    
        return symbol
