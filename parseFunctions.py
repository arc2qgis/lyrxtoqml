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
    sl_idx = 0
    for o in obj:       
        if not 'desc' in obj_arr  :
            obj_arr['desc'] = []
        type = o['type']    
        if  not type in obj_arr  :
            obj_arr[type] = 0
        obj_arr[type] = obj_arr[type] + 1
        o['sl_idx'] = sl_idx
        obj_arr['desc'].append(o)
        sl_idx = sl_idx + 1
    #print(sl_idx)
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
    solid_index = -1
    for ls in obj['desc']:
        if ls['type'] == 'CIMSolidFill' and ls['enable']:
            temp_color = ls['color']['values']
            new_color = colorToRgbArray(temp_color, ls['color']['type'])            
            symbol = QgsSymbol.defaultSymbol(layer.geometryType())
            symbol.setColor(new_color)  
            #print("solid index " + str(ls['sl_idx']))
            #symbol.setStrokeColor(new_color)     
            solid_index = ls['sl_idx']
            i = i + 1
    if i > 1:
        print("Extra " + str(i) + " solid fills")
    # Add default shape fill.
    if symbol == '' or  geometry_general_type_str == 'line':
            symbol = QgsSymbol.defaultSymbol(layer.geometryType())
            new_color = colorToRgbArray([255,255,255,0], 'CIMRGBColor')
            symbol.setColor(new_color)
            
            
    #symbol['order'] = 0
    return [symbol, solid_index]

def parseStroke(obj, symb):                
    layers = []
    i = 0
    for ls in obj['desc']:
        #print(ls)
        if ls['type'] == 'CIMSolidStroke' and ls['enable']:
            dp = parseStrokeEffects(ls)
            #print(dp)
            temp_color = ls['color']['values']
            new_color = colorToRgbArray(temp_color, ls['color']['type'])
            #stroke_width = ls['width'] if ls['width'] < 2 else ls['width']*point2mm             
            stroke_width = ls['width']*point2mm             
            if  i == 0 and  dp == '' and i > 9:
                #print(geometry_general_type_str)
                if not geometry_general_type_str == 'line':
                    print("stroke not line change the first SL")
                    symb.symbolLayer(0).setStrokeColor(new_color)
                    symb.symbolLayer(0).setStrokeWidth(stroke_width)                
                else:
                    symb.symbolLayer(0).setColor(new_color)
                    symb.symbolLayer(0).setWidth(stroke_width)                
                if not dp == '':
                    print("dash pattern in first layer")
                    symb.symbolLayer(0).setUseCustomDashPattern(True)
                    symb.symbolLayer(0).setCustomDashVector(dp)
                        
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
                if not geometry_general_type_str == 'line':
                    symbol_layer.setOffset(stroke_width/2)
                # TODO: Read join and shape
                if not geometry_general_type_str == 'line':
                    symbol_layer.setPenJoinStyle(0)
                if not dp == '':
                    print("dp in " + str(i) + " stroke symbol")
                    symbol_layer.setUseCustomDashPattern(True)
                    symbol_layer.setCustomDashVector(dp)
                print("stroke symbol idx is " + str(ls['sl_idx']))  
                stroke_order = ls['sl_idx']
                symb.insertSymbolLayer(stroke_order, symbol_layer)            
                #print(symbol_layer.color())
            i = i + 1            
    
    return symb   
    
def parseStrokeEffects(obj):
    dash_pattern = ''
    temp_array = []
    if 'effects' in obj:
        #print("effects")
        if obj['effects'][0]['type'] == 'CIMGeometricEffectDashes' :
           #print("dash") 
            temp_pattern = obj['effects'][0]['dashTemplate']
            for tp in temp_pattern:
                temp_array.append(tp*point2mm)
            dash_pattern = temp_array   
            #print(dash_pattern)
    return dash_pattern

def parseLineFill(obj):
    isDoubleHatch = False
    isOffsetEqFirstWidth = True 
    symbol = ""
    layers = []
    i = 0
    first_width = 0
    prev_hatch = 0
    for ls in obj['desc']:        
        if ls['type'] == 'CIMHatchFill' and ls['enable']:            
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
    opacity = 255
    if len(color_array) > 2 and type == 'CIMRGBColor':
        opacity = color_array[3]/100*255
        new_color = QColor.fromRgb(color_array[0],color_array[1], color_array[2], opacity) 
        #print(opacity)
    else:    
        new_color = QColor.fromRgb(color_array[0],color_array[1], color_array[2])        
    if type == 'CIMHSVColor':
        new_color = QColor.fromHsvF(color_array[0]/360,color_array[1]/100, color_array[2]/100,1)
    elif type == 'CIMCMYKColor':
        temp_color = cmyk2Rgb(color_array)
        new_color = QColor.fromRgb(temp_color[0],temp_color[1], temp_color[2])
    
    return new_color

def parseSimpleRenderer(obj):
    
    symbol = ''
    symb_def = obj['symbol']['symbol']['symbolLayers'][0]
    
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
        symbol.setAngle(new_angle)
        # Fix offset - rotation twaek
        #symbol.setOffset(QPointF(0.3,0.0))
        #offset_tweak = (max_size - new_size)/2 if max_size > new_size else 0
        #print(offset_tweak)
        #if offset_tweak > 0:
        #    symbol.setOffset(QPointF(0,0))
    #print(symb_def['characterIndex'])
    # Check fill color 
    if 'symbol' in symb_def :
        if 'symbolLayers' in symb_def['symbol']:
            color = parseSymbolLayerSolidFill(symb_def['symbol']['symbolLayers'])
            #print(color)
            symbol.setColor(color[0])
    if not geometry_general_type_str == 'point':
        symbol_base = QgsPointPatternFillSymbolLayer()
        if 'stepX' in symb_def['markerPlacement']:
            symbol_base.setDistanceX(symb_def['markerPlacement']['stepX']*point2mm)
            symbol_base.setDistanceY(symb_def['markerPlacement']['stepY']*point2mm)    
        
        
        marker = QgsMarkerSymbol()
        marker.changeSymbolLayer(0, symbol)
        symbol_base.setSubSymbol(marker)
        
        
        return symbol_base
    else:    
        return symbol
