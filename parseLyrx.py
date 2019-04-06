import os
import sys

exec(open('C:/xampp/htdocs/lyrxtoqml_d/parseFunctions.py'.encode('utf-8')).read())
import json
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

qfd = QFileDialog()
title = 'Choose a lyrx file for symbology to ' 
f = QFileDialog.getOpenFileName(qfd, title, '',  filter=('lyrx file (*.lyrx)'))[0]
print(f)

layer = iface.activeLayer()
geometry_type_str = QgsWkbTypes.displayString(int(layer.wkbType()))
geometry_type = layer.wkbType()
geometry_general_type_str = geometry_type_str.replace('Multi', '').lower()  
geometry_general_type_str = geometry_general_type_str.replace('string', '')
print(geometry_general_type_str)

#path = "c:/xampp/htdocs/lyrxtoqml_d/lyrx samples/"    
#j_data = read_lyrx(path + "plan2.lyrx")
#j_data = read_lyrx("c:/xampp/htdocs/lyrxtoqml_d/lyrx samples/rami plan.lyrx")
#j_data = read_lyrx("c:/xampp/htdocs/lyrxtoqml_d/lyrx samples/nekudati.lyrx")

if not f == '':
    j_data = read_lyrx(f)

    simple_symbol = False
    layerDef = j_data['layerDefinitions']
    renderer = ''
    renderers = [];
    renderers_symb_type = []
    dataset_names = []

    for p in layerDef :
        print(p['name'])
        temp_renderer = p['renderer'] if 'renderer' in p else ''
        renderers.append(temp_renderer)
        if not temp_renderer == '':
            rend_type = temp_renderer['symbol']['type'] if 'symbol' in temp_renderer else  temp_renderer['defaultSymbol']['symbol']['type']
            renderers_symb_type.append(rend_type.lower())
            dataset = p['featureTable']['dataConnection']['dataset']
            dataset_names.append(dataset)

    print(renderers_symb_type)
    print(dataset_names)
    # Find a renderer with the active layer field attribute
    rend_to_check = []
    x = 0
    for r in renderers_symb_type:
        print(r)
        if geometry_general_type_str in r:            
            rend_to_check.append(x)
        x = x + 1

    rend_idx = -1
    print(rend_to_check)
    # Check in the active layers for matching classification fields  
    for z in rend_to_check:
        print(renderers[z]['fields'][0])
        #print(layer.fields())
        field_exist = layer.fields().indexFromName(renderers[z]['fields'][0])
        if field_exist > -1:
            rend_idx = z
    # Check simple symbol        
    if rend_idx < 0:
        active_name = layer.sourceName()
        rend_idx = dataset_names.index(active_name)
        simple_symbol = True


    if rend_idx > -1 and not simple_symbol:
        categories = []
        class_field = renderers[rend_idx]['fields'][0] if len(renderers[rend_idx]['fields']) > 0 else 'CODE'
        class_field2 = renderers[rend_idx]['fields'][1] if len(renderers[rend_idx]['fields']) > 1 else ''
        #print(class_field)
        classes = renderers[rend_idx]["groups"][0]["classes"]
        symbols_labels = []
        symbol_layers = []
        symbol_values = []    
        for c in classes :    
            symbol_layers.append(readValueDef(c))
            symbols_labels.append(c['label'])
            symbol_values.append(c['values'][0]['fieldValues'])
        
        idx = 0
        for sl in symbol_layers:
            #print(sl[0]['type'])
            symbol_def = checkSymbolType(sl)
            ret = parseSolidFill(symbol_def)    
            #print(ret)
            print ("val :" + str(symbol_values[idx][0]))
            line_ret = parseLineFill(symbol_def)
            #print(len(line_ret))
            if not line_ret == '':
                print(len(line_ret))
                for line in line_ret:
                    ret.appendSymbolLayer(line)
            
            if 'template_stroke_num' in symbol_def and not ret == '':
                ret = parseStroke(symbol_def, ret)  
            #print(len(sl))
            #if 'characterIndex' in sl[0] and sl[0]['type'] == 'CIMCharacterMarker':        
            layers = []
            max_size = 0
            for charSl in sl:            
                if 'characterIndex' in charSl and charSl['type'] == 'CIMCharacterMarker':
                #if not geometry_general_type_str == 'line':
                    symbol = parseCharacterFill(charSl, max_size)
                    if not symbol == '':
                        print(charSl['characterIndex'])
                        layers.append(symbol)    
                        if geometry_general_type_str == 'point':          
                            max_size = max(symbol.size(), max_size)
            # Add the font fill in reverse order
            x = 0
            print(len(layers))
            for rl in reversed(layers):
                ret.appendSymbolLayer(rl)
                #ret.symbolLayer(0).markerOffsetWithWidthAndHeight(ret, max_size, max_size)
                x = x + 1

            symbol_val_prep = symbol_values[idx][0] + ", " + symbol_values[idx][1] if len(symbol_values[idx]) > 1 else symbol_values[idx][0]
            #category = QgsRendererCategory(symbol_values[idx][0], ret, symbols_labels[idx])
            category = QgsRendererCategory(symbol_val_prep, ret, symbols_labels[idx])
            categories.append(category)
            idx = idx + 1
        
        concat_str =  ", " + "', ', " + class_field2 + ")" if not class_field2 == "" else ")"
        renderer = QgsCategorizedSymbolRenderer("concat(" + class_field + concat_str, categories)
        
    elif renderers[rend_idx]['type'] == 'CIMSimpleRenderer' and simple_symbol:
        single_symbology = parseSimpleRenderer(renderers[rend_idx])
        if not single_symbology == '':
            #print('uni')
            symbol = QgsSymbol.defaultSymbol(layer.geometryType())
            symbol.changeSymbolLayer(0, single_symbology)
            renderer = QgsSingleSymbolRenderer(symbol)
    else:
        print("No matching lyrx symbology fields found for the active layer")

    # assign the created renderer to the layer
    if not renderer == '' :
        print("re-render")
        iface.activeLayer().setRenderer(renderer)
        iface.activeLayer().triggerRepaint()

