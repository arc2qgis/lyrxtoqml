import json
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import * 

def read_lyrx(file=None):    
    with open(file, mode="r", encoding="utf-8") as json_file:  
        data = json.load(json_file)
        print(data)    
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
    symbol = QgsSymbol.defaultSymbol(layer.geometryType())     
    i = 0
    for ls in obj['desc']:
        #print(ls)
        if ls['type'] == 'CIMSolidFill':
            if ls['color']['type'] == 'CIMRGBColor' :
                temp_color = ls['color']['values']
                #print(temp_color)
                #symbol.setColor(QColor(temp_color[0],temp_color[1], temp_color[2], 1))
                symbol.setColor(QColor.fromRgb(temp_color[0],temp_color[1], temp_color[2]))
                #print(QColor(symbol.color()).getRgb())
                i = i + 1
                if i > 1:
                    print(i)
    
    return symbol
    
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
	print(c)
	symbol_layers.append(readValueDef(c))
	symbols_labels.append(c['label'])
	symbol_values.append(c['values'][0]['fieldValues'])

#print(symbol_values)
categories = []

idx = 0
for sl in symbol_layers:
	symbol_def = checkSymbolType(sl)
	#print(symbol_def)
	#if not symbol_def['template'] == "hatch":
		#if not 'template_line_num' in symbol_def:
	ret = parseSolidFill(symbol_def)
	if not ret == '':
		category = QgsRendererCategory(symbol_values[idx][0], ret, symbols_labels[idx])
		categories.append(category)    
	idx = idx + 1


print(categories)

renderer = QgsCategorizedSymbolRenderer('MAVAT_CODE', categories)

# assign the created renderer to the layer
if renderer is not None:
	iface.activeLayer().setRenderer(renderer)

iface.activeLayer().triggerRepaint()

