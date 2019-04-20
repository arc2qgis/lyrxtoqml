import json
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import * 

# test on layer with three cap style line renderers
capStyles ={"Round" : 32, "Square" : 1, "Butt": 0}

joinStyles = {"Miter": 0, "Bevel" : 64, "Round": 128}

point2mm =  0.352778
def read_lyrx(file=None):    
    with open(file, mode="r", encoding="utf-8") as json_file:  
        data = json.load(json_file)
        #print(data)    
    return data
        
#%% 

def getSymbolLayers(obj):    
    return obj['symbol']['symbol']['symbolLayers']

def getSymbolHalo(obj):
    halo = ''
    if 'haloSymbol' in obj['symbol']['symbol']:
        halo = obj['symbol']['symbol']['haloSymbol']
    return halo
    
def checkSymbolType(obj):   
    #print(obj) 
    obj_arr = {}
    sl_idx = 0
    for o in obj:       
        #print(o)
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
    obj_arr['layer_count'] = sl_idx
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
    if 'CIMCharacterMarker' in obj_arr:
        obj_arr['template_font_num'] = obj_arr['CIMCharacterMarker']
    
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
    
def tweakHaloSymbol(layers, haloDef):
    if not haloDef == '':
        #halo_symbol_def = checkSymbolType(haloDef[0])
        #print(halo_symbol_def)
        print("halo " + haloDef['type'])
        new_layer = layers[len(layers) - 1].clone()
        new_layer.setSize(new_layer.size()*1.1)
        symbolHalo = haloDef['symbolLayers']
        halo_symbol_def = checkSymbolType(symbolHalo)
        hallo_arr = parseSolidFill(halo_symbol_def)            
        newFillSymbol = hallo_arr[0]        
        #print(newFillSymbol)
        newStroke = parseStroke(halo_symbol_def, newFillSymbol)  
        print(newStroke)
        for h in symbolHalo:
            print("halo symbol layer is " + h['type'])
        if newFillSymbol != '':    
            new_layer.setStrokeColor(newFillSymbol.color())
            new_layer.setStrokeWidth(0.5)
        if not newStroke == '':
            print('halo stroke color')
            #new_layer.setColor(newFillSymbol.color())
            new_layer.setStrokeColor(newStroke[0].color())
        layers.append(new_layer)
    return layers
        

def parseStroke(obj, symb):                
    layers = []
    i = 0
    layers_obj = {}
    firstWidth = 0
    firstColor = ''
    for ls in obj['desc']:
        #print(ls)
        if ls['type'] == 'CIMSolidStroke' and ls['enable']:
            dp = parseStrokeEffects(ls)            
            temp_color = ls['color']['values']
            new_color = colorToRgbArray(temp_color, ls['color']['type'])            
            stroke_width = ls['width']*point2mm                         
            
            if  i == 0 and  dp == '' :
                #Change the first symbol layer stroke by layer type
                if not geometry_general_type_str == 'line':                    
                    symb.symbolLayer(0).setStrokeColor(new_color)
                    symb.symbolLayer(0).setStrokeWidth(stroke_width)                
                else:                    
                    symb.symbolLayer(0).setColor(new_color)
                    symb.symbolLayer(0).setWidth(stroke_width)                               
                        
                stroke_order = ls['sl_idx']
                cleanStrokeSymbol = symbol_layer = QgsSimpleLineSymbolLayer()
                cleanStrokeSymbol.setColor(new_color)
                cleanStrokeSymbol.setWidth(stroke_width)
                firstWidth = stroke_width
                firstColor = cleanStrokeSymbol.color()
                cap = parseLineCap(ls)                                
                cleanStrokeSymbol.setPenCapStyle(cap)                        
                join = parseLineJoin(ls)
                cleanStrokeSymbol.setPenJoinStyle(join)
                
                if not geometry_general_type_str == 'line':
                    cleanStrokeSymbol.setOffset(stroke_width/2)
                
                layers_obj[stroke_order] = cleanStrokeSymbol
            else :
                #print("Another stroke layer")
                # Add simple line symbol layer (stroke)                
                symbol_layer = QgsSimpleLineSymbolLayer()                
                symbol_layer.setColor(new_color)
                symbol_layer.setWidth(stroke_width)
                if firstWidth < stroke_width:
                    if symbol_layer.color() == firstColor:
                        print("override simple line symbol stroke ")
                        if 0 in layers_obj:
                            layers_obj[0].setWidth(stroke_width)
                            if not geometry_general_type_str == 'line':
                                layers_obj[0].setOffset(stroke_width/2)
                                
                cap = parseLineCap(ls)                                
                symbol_layer.setPenCapStyle(cap)                        
                join = parseLineJoin(ls)
                symbol_layer.setPenJoinStyle(join)
                
                if not geometry_general_type_str == 'line':
                    symbol_layer.setOffset(stroke_width/2)
                
                # Add dash pattern
                if not dp == '':
                    #print("dp in " + str(i) + " stroke symbol")
                    symbol_layer.setUseCustomDashPattern(True)
                    symbol_layer.setCustomDashVector(dp)
                    
                #print("stroke symbol idx is " + str(ls['sl_idx']))  
                stroke_order = ls['sl_idx']                
                symb.appendSymbolLayer(symbol_layer)                            
                layers_obj[stroke_order] = symbol_layer
            i = i + 1            
                
    return [symb, layers_obj]
    
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
    layers_obj = {}
    i = 0
    first_width = 0
    prev_hatch = 0
    for ls in obj['desc']:        
        if ls['type'] == 'CIMHatchFill' and ls['enable']:            
            print(ls['sl_idx'])
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
            layers_obj[ls['sl_idx']] = symbol_layer
            if i == 0:
                prev_hatch = fill_width
            i = i + 1
                
    if len(layers) > 0:
        return [layers, layers_obj]
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
    #print(symb_def['sl_idx'])
    ret_val = ''
    symbol = QgsFontMarkerSymbolLayer()            
    symbol.setFontFamily(symb_def['fontFamilyName'])
    symbol.setCharacter(chr(symb_def['characterIndex']))
    new_size = symb_def['size']*point2mm
    symbol.setSize(symb_def['size']*point2mm)
    
    if 'rotation' in symb_def:
        new_angle = symb_def['rotation']
        negative_angle = new_angle < 0
        if (new_angle < 0 and new_angle <= -90) or new_angle == -45:
            new_angle = abs(new_angle)
        elif new_angle < 0 and new_angle > -90:
            new_angle = new_angle
            
        if abs(new_angle) > 180:                       
            new_angle = 360 - new_angle
            if negative_angle:
                new_angle = new_angle*-1
            print("180 corrct " + str(new_angle))
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
    # Chck offset        
    offset_def = symb_def['anchorPoint'] if 'anchorPoint' in symb_def else ''
    if 'x' in offset_def:
        offsetX = offset_def['x']*point2mm
        offsetY = offset_def['y']*point2mm 
        symbol.setOffset(QPointF(offsetX,offsetY))
        
    #print(symbol.markerOffsetWithWidthAndHeight(symbol, 8, 8))
    #print(symbol.markerOffset())
    #print(symbol.markerOffset2(
        
        
    if not geometry_general_type_str == 'point':
        symbol_base = QgsPointPatternFillSymbolLayer()
        if 'type' in symb_def['markerPlacement']:
            if symb_def['markerPlacement']['type'] == 'CIMMarkerPlacementAlongLineSameSize':
                symbol_base = QgsMarkerLineSymbolLayer()
        print("Special fill " + geometry_general_type_str)
        #print("special fill num is " + symbol)
        if 'stepX' in symb_def['markerPlacement']:
            symbol_base.setDistanceX(symb_def['markerPlacement']['stepX']*point2mm)
            symbol_base.setDistanceY(symb_def['markerPlacement']['stepY']*point2mm)    
        
        
        marker = QgsMarkerSymbol()
        marker.changeSymbolLayer(0, symbol)
        symbol_base.setSubSymbol(marker)
        
        
        ret_val = symbol_base
    else:    
        ret_val = symbol
    
    color_lock = symb_def['colorLocked'] if 'colorLocked' in symb_def else ''
    
    if not color_lock == '':
        print("locked")
        ret_val.setLocked(True)   
    
    #join = parseLineJoin(symb_def)
    #ret_val.setPenJoinStyle(join)
    
    return [ret_val, symb_def['sl_idx']]
    
def parseLineCap(obj):
    lineCap = 1
    #print(obj['capStyle']) 
    if 'capStyle' in obj:        
        lineCap = capStyles[obj['capStyle']]
    return lineCap

def parseLineJoin(obj):
    lineJoin = 1
    
    if 'joinStyle' in obj:        
        #print(obj['joinStyle']) 
        lineJoin = joinStyles[obj['joinStyle']]
    #print(lineJoin)
    return lineJoin    

    