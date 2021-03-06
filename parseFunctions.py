import json
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import * 
import re
#from PyQt5.PySide2 import *
#from svgpathtools import svg2paths
#import cairosvg

# test on layer with three cap style line renderers
capStyles ={"Round" : 32, "Square" : 1, "Butt": 0}

joinStyles = {"Miter": 0, "Bevel" : 64, "Round": 128}

paths_to_shapes_array = {
    "Cross2" : {"paths" : [
        [
          [
            -0.5,
            0.5
          ],
          [
            0.5,
            -0.5
          ]
        ],
        [
          [
            -0.5,
            -0.5
          ],
          [
            0.5,
            0.5
          ]
        ]
    ]},
    "Line" : {"paths" : [
        [
          [
            3,
            0
          ],
          [
            -3,
            0
          ]
        ]
      ]
    }
}

circle_rings = {
                    "curveRings" : [
                      [
                        [
                          1.2246467991473532e-16,
                          2
                        ],
                        {
                          "a" : [
                            [
                              1.2246467991473532e-16,
                              2
                            ],
                            [
                              0,
                              0
                            ],
                            0,
                            1
                          ]
                        }
                      ]
                    ]
                  }


#print(paths_to_shapes_array)

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
    obj_arr = {}
    sl_idx = 0
    count_disabled = 0
    for o in obj:               
        if not 'desc' in obj_arr  :
            obj_arr['desc'] = []
        type = o['type']    
        if  not type in obj_arr  :
            obj_arr[type] = 0
        obj_arr[type] = obj_arr[type] + 1
        o['sl_idx'] = sl_idx
        obj_arr['desc'].append(o)
        if 'enable' in o and not o['enable']:
            count_disabled = count_disabled + 1
            #print('disabled layer')
        sl_idx = sl_idx + 1
    #print(sl_idx)
    obj_arr['layer_count'] = sl_idx - count_disabled
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
            ### TODO add lock
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
        #print("Fix base solid color""")
                            
    #symbol['order'] = 0
    return [symbol, solid_index]
    
def tweakHaloSymbol(layers, haloDef):
    if not haloDef == '':
        #halo_symbol_def = checkSymbolType(haloDef[0])
        #print(halo_symbol_def)
        #print("halo " + haloDef['type'])
        new_layer = layers[len(layers) - 1].clone()
        new_layer.setSize(new_layer.size()*1.1)
        symbolHalo = haloDef['symbolLayers']
        halo_symbol_def = checkSymbolType(symbolHalo)
        hallo_arr = parseSolidFill(halo_symbol_def)            
        newFillSymbol = hallo_arr[0]        
        #print(newFillSymbol)
        newStroke = parseStroke(halo_symbol_def, newFillSymbol)  
        #print(newStroke)
        #for h in symbolHalo:
            #print("halo symbol layer is " + h['type'])
        if newFillSymbol != '':    
            new_layer.setStrokeColor(newFillSymbol.color())
            new_layer.setStrokeWidth(0.5)
        if not newStroke == '':
            #print('halo stroke color')
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
        firstDash = False
        if ls['type'] == 'CIMSolidStroke' and ls['enable']:
            ## Check dash effects
            dp = parseStrokeEffects(ls)            
            new_color = colorToRgbArray(ls['color']['values'], ls['color']['type'])            
            stroke_width = ls['width']*point2mm                         
            cap = parseLineCap(ls)                                
            join = parseLineJoin(ls)
            stroke_order = ls['sl_idx']
            if  i == 0 and  dp == '' and not geometry_general_type_str == 'line':
                #Change the first symbol layer stroke by layer type            
                symb.symbolLayer(0).setStrokeColor(new_color)
                symb.symbolLayer(0).setStrokeWidth(stroke_width)                
                
                cleanStrokeSymbol = symbol_layer = QgsSimpleLineSymbolLayer()
                cleanStrokeSymbol.setColor(new_color)
                cleanStrokeSymbol.setWidth(stroke_width)
                firstWidth = stroke_width
                firstColor = cleanStrokeSymbol.color()                
                cleanStrokeSymbol.setPenCapStyle(cap)                                        
                cleanStrokeSymbol.setPenJoinStyle(join)
                ## Fix stroke offset
                if not geometry_general_type_str == 'line':
                    cleanStrokeSymbol.setOffset(stroke_width/2)
                
                layers_obj[stroke_order] = cleanStrokeSymbol
            else :
                if (i == 0):
                    #print('dp FIRST!')
                    firstDash = True
                #print("Another stroke layer")
                # Add simple line symbol layer (stroke)                
                symbol_layer = QgsSimpleLineSymbolLayer()                
                symbol_layer.setColor(new_color)
                symbol_layer.setWidth(stroke_width)
                if firstWidth < stroke_width:
                    if symbol_layer.color() == firstColor:
                        print("override simple line symbol stroke ")
                        print("layers size is " + str(len(layers_obj)))
                        if 0 in layers_obj:
                            layers_obj[0].setWidth(stroke_width)
                            if not geometry_general_type_str == 'line':
                                layers_obj[0].setOffset(stroke_width/2)
                                                
                symbol_layer.setPenCapStyle(cap)                                        
                symbol_layer.setPenJoinStyle(join)
                ## Fix stroke offset
                if not geometry_general_type_str == 'line':
                    symbol_layer.setOffset(stroke_width/2)
                
                # Add dash pattern
                if not dp == '':
                    #print("dp in " + str(i) + " stroke symbol")
                    symbol_layer.setUseCustomDashPattern(True)
                    symbol_layer.setCustomDashVector(dp)
                symbol_layer = changeColorLock(symbol_layer, ls)    
                #print("stroke symbol idx is " + str(ls['sl_idx']))                  
                symb.appendSymbolLayer(symbol_layer)                            
                layers_obj[stroke_order] = symbol_layer
            i = i + 1            
                
    return [symb, layers_obj, firstDash]
    
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
            #print(ls['sl_idx'])
            sd_num = 0
            full_symbol_layer = ''
            for sd in reversed(ls['lineSymbol']['symbolLayers']):
                #print(sd)
                symb_def = sd
                print("Line symbol sl num is " + str(sd_num) + "From " + str(len(ls['lineSymbol']['symbolLayers'])))
                ## New definitions
                angle = ls['rotation'] if 'rotation' in ls else 0            
                temp_color = symb_def['color']['values']
                new_color = colorToRgbArray(temp_color, symb_def['color']['type'])
                ## Hatch definitions
                fill_width = symb_def['width'] if 'width' in symb_def else 1
                fill_width = fill_width*point2mm
                fill_distance = ls['separation'] if 'separation' in ls else 0
                fill_distance = fill_distance*point2mm
                if fill_distance <= 0.6 and not fill_distance == 0:
                    print("QGIS problem with line fill small distances")
                    widthRatio = fill_width/point2mm/fill_distance
                    if widthRatio < 1:
                        widthRatio = 1/widthRatio 
                    #print(widthRatio)
                    fill_distance = max(fill_distance*2,0.8)
                    fill_width = fill_width/point2mm*widthRatio
                    if fill_width > fill_distance:
                        print("Fill width error")
                       
                fill_offset = ls['offsetX'] if 'offsetX' in ls else 0
                #fill_offset = fill_offset*point2mm
                ## Create symbol and set properties
                symbol_layer = QgsLinePatternFillSymbolLayer() #if symbol_layer == '' else QgsSimpleLineSymbolLayer()
                if sd_num == 0:
                    full_symbol_layer = symbol_layer
                else:
                    symbol_layer = QgsSimpleLineSymbolLayer()    
                    
                dp = parseStrokeEffects(symb_def)
                
                symbol_layer.setColor(new_color)
                if sd_num >= 0:
                    #print("before def")
                    if sd_num == 0:
                        symbol_layer.setLineAngle(angle)
                        symbol_layer.setLineWidth(fill_width)                    
                        symbol_layer.setDistance(fill_distance)                     
                        symbol_layer = changeColorLock(symbol_layer, ls)
                    else:
                        #symbol_layer.setAngle(angle)
                        try:
                            print("Try width")
                            symbol_layer.setWidth(fill_width)                    
                        except:
                            print("set width error")

                
                    if not dp == '':
                        #print("Dash pattern Fill is ")
                        #print(dp)
                        symbol_layer.subSymbol().symbolLayer(0).setUseCustomDashPattern(True)
                        symbol_layer.subSymbol().symbolLayer(0).setCustomDashVector(dp)
                        #print(symbol_layer.subSymbol().symbolLayer(0).__class__.__name__)
                    ## Tweak save the first hatch width and use as offset
                    # TODO: Real fix, mark problematic files and unusual offsets
                    if prev_hatch > 0 and sd_num == 0:
                        symbol_layer.setLineWidth(fill_width)
                        symbol_layer.setOffset(fill_width)
                        #isOffsetEqFirstWidth = fill_width == prev_hatch
                        isDoubleHatch = True
                    elif not fill_offset == 0 and not dp == '' :
                        symbol_layer.setOffset(fill_offset)
                
                    if not sd_num == 0:          
                        try:                                
                            full_symbol_layer.subSymbol().appendSymbolLayer(symbol_layer)
                            
                        except:
                            print("Failed append subsymbol")
                            print(full_symbol_layer.__class__.__name__)
                            print(full_symbol_layer.subSymbol().__class__.__name__)
                        
                sd_num = sd_num + 1                                       
                
            #print(full_symbol_layer.__class__.__name__)
            layers.append(full_symbol_layer)
            layers_obj[ls['sl_idx']] = full_symbol_layer
            
            if i == 0:
                prev_hatch = fill_width
            i = i + 1
                
                
    if len(layers) > 0:
        return [layers, layers_obj]
    else:
        return symbol
        
def parsePictureFill(obj, appendix):
    pic_idx = 0
    svg_symbol = ''
    symb_idx = -1
    for ls in obj['desc']:        
        if ls['type'] == 'CIMPictureFill' and ls['enable']:   
            #print("Picture url is " + ls["url"])
            url_data = ls['url']
            url_data_array = url_data.split(",")

            template_f = open("C:\\xampp\\htdocs\\lyrxtoqml_d\\svg\\svg_template.svg")
            template_str = template_f.read()            
            template_str = str(template_str)            
            
            template_str = template_str.replace("image_url", str(url_data))
                    
            f = open(str(pic_idx)+appendix + ".svg","w")
            name = f.name
            print(name)
            f.write(template_str)
            #print(f)
            template_f.close()
            f.close()
            svg_symbol = QgsSVGFillSymbolLayer.create()
            svg_symbol.setSvgFilePath( name )
            #print(svg_symbol)
            #print(svg_symbol.svgFilePath())
            new_color = colorToRgbArray([80,80,80,100], 'CIMRGBColor')     
            svg_symbol.setSvgFillColor(new_color)
            svg_symbol.setSvgStrokeColor(new_color)
            symb_idx = ls['sl_idx']

            
            pic_idx = pic_idx + 1
            
    return [svg_symbol, symb_idx]
            

def changeColorLock(sl, symbol_def):
    color_lock = symbol_def['colorLocked'] if 'colorLocked' in symbol_def else ''    
    if not color_lock == '':
        #print("locked")
        sl.setLocked(True)
    return sl

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
    
    if  symb_def['type'] == 'CIMVectorMarker':
        vector_layers = parseVectorSymbolLine(symb_def, True)
        print(vector_layers)
        if not vector_layers == '':
            vl_idx = vector_layers
            for vl in vector_layers:
                v_symb = vl[0]
                v_ord = vl[1]
                #allSymbolLayers[v_ord] = v_symb
                symbol = v_symb
                print("After simple vector")
    
                        
    return symbol
    
def parseVectorSymbolLine(obj, simple):
    print(obj)
    vector_idx = 0
    vector_symbols = []
    vector_sl_array = []
    symb_idx = -1
    base_symbol = ''
    order = ''
    if not 'desc' in obj:
        obj['desc'] = [obj]
    for ls in obj['desc']:        
        if ls['type'] == 'CIMVectorMarker' and ls['enable']: 
            
            order = ls['sl_idx'] if 'sl_idx' in ls else -3
            if 'markerGraphics' in ls:
                mg = ls['markerGraphics']
                #print("order is "+ str(ls['sl_idx']))
                #print(mg)
                #print("mg len is " + str(len(mg)))
                #if 'geometry' in mg[0]:
                #    print(mg)
                placement = 1
                markerDistanceX = ''
                markerDistanceY = ''
                if 'markerPlacement' in ls and 'placementTemplate' in ls['markerPlacement']:
                    placement = ls['markerPlacement']['placementTemplate'][0]
                    print("placement " + str(placement))
                    placement = placement*point2mm 
                if 'markerPlacement' in ls and 'stepX' in ls['markerPlacement']:
                    markerDistanceX = ls['markerPlacement']['stepX']*point2mm
                    markerDistanceY = ls['markerPlacement']['stepY']*point2mm
                        
                symbol_size = ls['size']*point2mm
                    
                for mgs in mg:
                    #print(mgs)
                    if 'geometry' in mgs and 'x' in mgs['geometry']:
                        print("geom is xy")
                        mgs_sl = mgs['symbol']['symbolLayers']
                        vector_symbols = []
                        #print(mgs_sl)
                        for sl in mgs_sl:
                            if sl['type'] == 'CIMCharacterMarker':                                
                                parsed_symb = parseCharacterFill(sl, 0) 
                                if not parsed_symb[0] == '':
                                    symb_type = parsed_symb[0].__class__.__name__
                                    if 'MarkerLine' in symb_type:
                                        parsed_symb[0].setInterval(placement)
                                    else:
                                        if not markerDistanceX == '':
                                            parsed_symb[0].setDistanceX(markerDistanceX)
                                            parsed_symb[0].setDistanceY(markerDistanceY)
                                    vector_symbols.append(parsed_symb[0])
                        if len(vector_symbols) > 1:
                            base_symbol = vector_symbols[0].clone()
                            vs_idx = 0
                            for vs in vector_symbols:
                                if vs_idx > 0:
                                    subSymbLayer = vs.subSymbol().symbolLayer(0).clone()
                                    origFirstSubSymbLayer = base_symbol.subSymbol().symbolLayer(0).clone()
                                    #print(subSymbLayer)
                                    print("append more")
                                    base_symbol.subSymbol().appendSymbolLayer(origFirstSubSymbLayer)
                                    base_symbol.subSymbol().changeSymbolLayer(0, subSymbLayer)
                                    #print("Count sub: " + str(base_symbol.subSymbol().symbolLayerCount()))
                                vs_idx = vs_idx + 1
                            vector_sl_array.append([base_symbol, order])
                        else:
                            print("append first")
                            vector_sl_array.append([vector_symbols[0], order])
                            
                    else:
                        print("geom is ")
                        print(mgs['geometry'])
                        geom = mgs['geometry']
                        ## Finding matching pattern
                        if 'paths' in geom: 
                            for path_obj in paths_to_shapes_array:
                                print(path_obj)
                                path_pattern = []
                                for path_p in geom['paths']:
                                    pair = []
                                    for path_pair in path_p:
                                        #print(path_pair)                                    
                                        new_str = ",".join(map(str, path_pair))                                    
                                        new_str  = re.sub('[1-9]', '3', new_str)
                                        new_str = new_str.split(',')
                                        try:
                                            new_str = [int(i) for i in new_str]
                                        except:
                                            new_str = [float(i) for i in new_str]
                                            #print("no change")
                                        #print(new_str)
                                        pair.append(new_str)                                    
                                                                       
                                    path_pattern.append(pair)
                                
                                alt_path_object = {"paths": path_pattern}
                                #print(alt_path_object)
                                if paths_to_shapes_array[path_obj] == geom or paths_to_shapes_array[path_obj] == alt_path_object:
                                    #print("Found geom!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                                    #print(QgsSimpleMarkerSymbolLayerBase.decodeShape(path_obj))
                                    shape_id, isShape = QgsSimpleMarkerSymbolLayerBase.decodeShape(path_obj)
                                    main_sym = QgsMarkerLineSymbolLayer.create()
                                    vect_symb = QgsSimpleMarkerSymbolLayer.create()                                
                                    vect_symb.setShape(shape_id)                                
                                    vect_symb.setSize(symbol_size)                                
                                    print(vect_symb)
                                    main_sym.subSymbol().changeSymbolLayer(0, vect_symb)
                                    main_sym.setInterval(placement)
                                    vector_sl_array.append([main_sym, order])
                        elif 'curveRings' in geom:                                                    
                            vect_symb = QgsSimpleMarkerSymbolLayer.create()                                                            
                            vect_symb.setSize(symbol_size)                                
                            print(vect_symb)
                            if not geometry_general_type_str == 'point':
                                main_sym = QgsMarkerLineSymbolLayer.create()
                                main_sym.subSymbol().changeSymbolLayer(0, vect_symb)
                                main_sym.setInterval(placement)
                                vector_sl_array.append([main_sym, order])
                            else:
                                vector_sl_array.append([vect_symb, order])
                                
                            
                                
                            
    #print(base_symbol)    
    #if not base_symbol == '':
    #    print(base_symbol.subSymbol().symbolLayerCount())    
    if len(vector_sl_array) == 0:
        vector_sl_array = ''
    else:
        print(vector_sl_array)                    
        print("vector array length " + str(len(vector_sl_array)))
    
    return vector_sl_array
            

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
            print("180 correction to " + str(new_angle))
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
    ## Check offset        
    offset_def = symb_def['anchorPoint'] if 'anchorPoint' in symb_def else ''
    if 'x' in offset_def:
        offsetX = offset_def['x']*point2mm
        offsetY = offset_def['y']*point2mm 
        symbol.setOffset(QPointF(offsetX,offsetY))
        
    ### TODO Fix offset after rotation
    #print(symbol.markerOffsetWithWidthAndHeight(symbol, 8, 8))
        
    if not geometry_general_type_str == 'point':
        symbol_base = QgsPointPatternFillSymbolLayer()
        if geometry_general_type_str == 'line':
            symbol_base = QgsMarkerLineSymbolLayer()
        ## Change to line symbol when diplacement is along line
        if 'markerPlacement' in symb_def and 'type' in symb_def['markerPlacement']:
            if symb_def['markerPlacement']['type'] == 'CIMMarkerPlacementAlongLineSameSize':
                symbol_base = QgsMarkerLineSymbolLayer()
        #print("Special fill " + geometry_general_type_str)        
        ## Fill pattern
        if 'markerPlacement' in symb_def and 'stepX' in symb_def['markerPlacement']:
            symbol_base.setDistanceX(symb_def['markerPlacement']['stepX']*point2mm)
            symbol_base.setDistanceY(symb_def['markerPlacement']['stepY']*point2mm)    
                
        marker = QgsMarkerSymbol()
        marker.changeSymbolLayer(0, symbol)
        symbol_base.setSubSymbol(marker)                
        ret_val = symbol_base
    else:    
        ret_val = symbol
    ret_val = changeColorLock(ret_val, symb_def)
    
    #join = parseLineJoin(symb_def)
    #ret_val.setPenJoinStyle(join)
    sym_ord = symb_def['sl_idx'] if 'sl_idx' in symb_def else -2
    return [ret_val, sym_ord]
    
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

    