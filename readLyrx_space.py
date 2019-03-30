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

def parseSolidFill(obj):    
    solidFill = ''    
    layer = iface.activeLayer()    
    symbol = ""    
    i = 0
    for ls in obj['desc']:
        #print(ls)
        if ls['type'] == 'CIMSolidFill':
            temp_color = ls['color']['values']
            if ls['color']['type'] == 'CIMHSVColor':
                temp_color = HSVtoRGB(temp_color[0],temp_color[1], temp_color[2])
            if ls['color']['type'] == 'CIMCMYKColor':
                temp_color = cmyk2Rgb(temp_color)
            
            symbol = QgsSymbol.defaultSymbol(layer.geometryType())
            symbol.setColor(QColor.fromRgb(temp_color[0],temp_color[1], temp_color[2]))
            #print(QColor(symbol.color()).getRgb())
            i = i + 1
            if i > 1:
                print(i)
    
    return symbol

def parseLineFill(obj):
    symbol = ""
    layers = []
    i = 0
    first_width = 0
    first_offset = 0
    for ls in obj['desc']:
        #print(ls)
        if ls['type'] == 'CIMHatchFill':
            symbol_layer = ''
            symb_def = ls['lineSymbol']['symbolLayers'][0]
            angle = ls['rotation'] if 'rotation' in ls else 0
            temp_color = symb_def['color']['values']
            if symb_def['color']['type'] == 'CIMHSVColor':
                temp_color = HSVtoRGB(temp_color[0],temp_color[1], temp_color[2])
            if symb_def['color']['type'] == 'CIMCMYKColor':
                temp_color = cmyk2Rgb(temp_color)
            new_color = QColor.fromRgb(temp_color[0],temp_color[1], temp_color[2])
            fill_width = symb_def['width'] if 'width' in symb_def else 1
            fill_width = fill_width*point2mm
            fill_distance = ls['separation'] if 'separation' in ls else 0
            fill_distance = fill_distance*point2mm
            fill_offset = ls['offsetX'] if 'offsetX' in ls else 0
            #fill_offset = fill_offset*point2mm
            symbol_layer = QgsLinePatternFillSymbolLayer()
            symbol_layer.setColor(new_color)
            symbol_layer.setLineAngle(angle)
            symbol_layer.setLineWidth(fill_width)
            symbol_layer.setDistance(fill_distance)
            if first_offset > 0 :
                print(first_offset)
                symbol_layer.setOffset(first_offset)    
                #symbol_layer.setDistance(fill_distance)
            if fill_offset > 0:
                first_offset = fill_width
            
            
            #symbol_layer.setLineWidthUnit(mmPerMapUnit)
            #print(symbol_layer.lineWidthUnit())
            layers.append(symbol_layer)
                
            i = i + 1
            if i == 1:
                first_width = fill_width
            #if i > 1:
                #print(i)
                #print(angle)
    if len(layers) > 0:
        return layers
    else:
        return symbol

def HSVtoRGB(H, S, V):
    V2 = V * (1 - S);
    
    if ((H>=0 & H<=60) | (H>=300 & H<=360)):
        r = V
    elif (H>=120 & H<=240):
        r = V2
    elif (H>=60 & H<=120):
        r = mix(V,V2,(H-60)/60)
    elif (H>=240 & H<=300):
        r = mix(V2,V,(H-240)/60)
    else:
        r = 0
    
    if (H>=60 & H<=180):
        g = V
    elif (H>=240 & H<=360):
        g = V2
    elif (H>=0 & H<=60):
        g = mix(V2,V,H/60)
    elif (H>=180 & H<=240):
         g = mix(V,V2,(H-180)/60)
    else:
        g = 0 
        
    if (H>=0 & H<=120):
        b = V2
    elif (H>=180 & H<=300):
        b = V
    elif (H>=120 & H<=180):
        b = mix(V2,V,(H-120)/60)
    elif (H>=300 & H<=360):
        b = mix(V,V2,(H-300)/60)
    else:
        b = 0
        
    return [round(r * 255), round(g* 255 ), round(b * 255)]
    
def cmyk2Rgb(cmyk_array):
    c = cmyk_array[0]
    m  = cmyk_array[1]
    y  = cmyk_array[2]
    k  = cmyk_array[3]
    
    r = int((1 - ((c + k)/100)) * 255)
    g = int((1 - ((m + k)/100)) * 255)
    b = int((1 - ((y + k)/100)) * 255)
    
    color = ', '.join([str(x) for x in [r,g,b]])
    #return color
    return [r, g, b]
    
j_data = read_lyrx("c:/xampp/htdocs/lyrxtoqml_d/plan.lyrx")


layerDef = j_data['layerDefinitions']
renderers = '';
for p in layerDef :
    print(p['name'])
    renderers = p['renderer']

classes = renderers["groups"][0]["classes"]
#print(classes)
symbols_labels = []
symbol_layers = []
symbol_values = []
for c in classes :
    #print(c)
    symbol_layers.append(readValueDef(c))
    symbols_labels.append(c['label'])
    symbol_values.append(c['values'][0]['fieldValues'])

#print(symbol_values)
categories = []

idx = 0
for sl in symbol_layers:
    symbol_def = checkSymbolType(sl)
    ret = parseSolidFill(symbol_def)
    if not ret == '':
        if not symbol_def['template'] == 'hatch':
            category = QgsRendererCategory(symbol_values[idx][0], ret, symbols_labels[idx])
            categories.append(category)
    #else:
        #print("no color")
    if symbol_def['template'] == 'hatch':
        print ("val :" + str(symbol_values[idx][0]))
        line_ret = parseLineFill(symbol_def)
        if not ret == '':
            if not line_ret == '':                
                for line in line_ret:
                    ret.appendSymbolLayer(line)
                    #print(line.lineAngle())
                category = QgsRendererCategory(symbol_values[idx][0], ret, symbols_labels[idx])
                categories.append(category)
                
       
    idx = idx + 1


#print(categories)

renderer = QgsCategorizedSymbolRenderer('MAVAT_CODE', categories)

# assign the created renderer to the layer
if renderer is not None:
    iface.activeLayer().setRenderer(renderer)

iface.activeLayer().triggerRepaint()

