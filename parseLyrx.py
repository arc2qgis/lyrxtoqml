import os
import sys

exec(open('C:/xampp/htdocs/lyrxtoqml_d/parseFunctions.py'.encode('utf-8')).read())
import json
import base64
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *
from collections import OrderedDict


qfd = QFileDialog()
title = 'Choose a lyrx file for symbology to ' 
f = QFileDialog.getOpenFileName(qfd, title, '',  filter=('lyrx file (*.lyrx)'))[0]
#print(f)

layer = iface.activeLayer()
geometry_type_str = QgsWkbTypes.displayString(int(layer.wkbType()))
geometry_type = layer.wkbType()
geometry_general_type_str = geometry_type_str.replace('Multi', '').lower()  
geometry_general_type_str = geometry_general_type_str.replace('string', '')
#print(geometry_general_type_str)

if not f == '':
    j_data = read_lyrx(f)

    simple_symbol = False
    layerDef = j_data['layerDefinitions']
    renderer = ''
    renderers = [];
    renderers_symb_type = []
    dataset_names = []

    ## Read the lyrx file definitions
    for p in layerDef :
        print(p['name'])
        ## Check for renderers
        temp_renderer = p['renderer'] if 'renderer' in p else ''
        renderers.append(temp_renderer)
        ## Get lyrx shape type and original names
        if not temp_renderer == '':
            rend_type = temp_renderer['symbol']['type'] if 'symbol' in temp_renderer else  temp_renderer['defaultSymbol']['symbol']['type']
            renderers_symb_type.append(rend_type.lower())
            dataset = p['featureTable']['dataConnection']['dataset']
            dataset_names.append(dataset)
            print(rend_type)

    print(renderers_symb_type)
    print(dataset_names)
    
    ## Find a renderer with the active layer field attribute
    ## Part 1: get matched shapes 
    rend_to_check = []
    x = 0    
    for r in renderers_symb_type:
        print(r)
        if geometry_general_type_str in r:            
            rend_to_check.append(x)
        x = x + 1

    rend_idx = -1
    #print(rend_to_check)
    ## Check in the active layers for matching classification fields  
    for z in rend_to_check:
        print(renderers[z]['fields'][0])
        #print(layer.fields())
        ## Check for matching column names
        field_exist = layer.fields().indexFromName(renderers[z]['fields'][0])
        if field_exist > -1:
            rend_idx = z
    
    ## Check if simple symbol
    if rend_idx < 0:
        active_name = layer.sourceName()
        rend_idx = dataset_names.index(active_name)
        simple_symbol = True


    if rend_idx > -1 and not simple_symbol:
        ## Create data arrays for symbols, labels, symbolLayers, halo options
        categories = []
        allSymbolLayers = {}
        class_field = renderers[rend_idx]['fields'][0] if len(renderers[rend_idx]['fields']) > 0 else 'CODE'
        class_field2 = renderers[rend_idx]['fields'][1] if len(renderers[rend_idx]['fields']) > 1 else ''
        class_field3 = renderers[rend_idx]['fields'][2] if len(renderers[rend_idx]['fields']) > 2 else ''
        #print(class_field)
        classes = renderers[rend_idx]["groups"][0]["classes"]
        symbols_labels = []
        symbol_layers = []
        symbol_values = []    
        halo_symbols = []
        multi_cat = []
        for c in classes :    
            symbol_layers.append(getSymbolLayers(c))
            halo_symbols.append(getSymbolHalo(c))
            symbols_labels.append(c['label'])
            symbol_values.append(c['values'][0]['fieldValues'])
            if len(c['values']) > 1:
                vf_idx = 0
                multi_array = []
                for vf in c['values']:
                    if vf_idx > 0:
                       multi_array.append(vf['fieldValues'])             
                    vf_idx = vf_idx + 1    
                multi_cat.append(multi_array)
            else:
                multi_cat.append('')
        #print(symbol_layers)
        #print(halo_symbols)
        #print(symbol_layers)
        print(multi_cat)
        ## Convert the symbolLayers definition of each CIMUniqueValueClass to qgis symbol and create a category
        idx = 0
        for sl in symbol_layers:
            print ("val :" + str(symbol_values[idx][0]))
            allSymbolLayers = {}                        
            #print(sl[0]['type']) 
            ## Create definition array - add order and more    
            symbol_def = checkSymbolType(sl)
            layer_num = symbol_def['layer_count']            
            print("Symology count is " + str(layer_num))            
            ret_arr = parseSolidFill(symbol_def)            
            ret = ret_arr[0]
            #print("solid fill idx " + str(ret_arr[1])) 
            allSymbolLayers[ret_arr[1]] = ret                        
            noSolid = False
            firstDash = False
            if ret_arr[1] < 0:
                noSolid = True   
                print("NO SOLID!")

            svg_file_appendix = str(symbol_values[idx][0]).replace(" ","_")
            picture_ret = parsePictureFill(symbol_def, svg_file_appendix)
            if not picture_ret[0] == '':
                print("pic fill try")
                allSymbolLayers[picture_ret[1]] = picture_ret[0]
                ret.appendSymbolLayer(picture_ret[0])
            ## Create hatch fill 
            lines_ret = parseLineFill(symbol_def)            
            #print(len(line_ret))
            if not lines_ret == '':
                line_ret = lines_ret[0]
                print("hatch number is " + str(len(line_ret)))
                for line in line_ret:
                    try:
                        ret.appendSymbolLayer(line)
                    except:
                        print(line.__class__.__name__)
                for line_sym in lines_ret[1]:
                    allSymbolLayers[line_sym] = lines_ret[1][line_sym]                    

            ## Create line strokes symbols
            if 'template_stroke_num' in symbol_def and not ret == '':                
                ret_val = parseStroke(symbol_def, ret)  
                ret = ret_val[0]
                stroke_symbols = ret_val[1] 
                for str_s in stroke_symbols:
                    #print(str_s)
                    allSymbolLayers[str_s] = stroke_symbols[str_s]                                    
                firstDash = ret_val[2]
                    
            vector_layers = parseVectorSymbolLine(symbol_def)
            print(vector_layers)
            if not vector_layers == '':
                vl_idx = vector_layers
                for vl in vector_layers:
                    v_symb = vl[0]
                    v_ord = vl[1]
                    allSymbolLayers[v_ord] = v_symb
                    ret.appendSymbolLayer(v_symb)
                    print("After vector")
                print(ret)
                print(firstDash)
                print(allSymbolLayers)
                #allSymbolLayers[vl_idx] = vector_layers[0]
                #ret.appendSymbolLayer(vector_layers[0])
                

            ## Create character fills
            layers = []
            max_size = 0            
            for charSl in sl:            
                if 'characterIndex' in charSl and charSl['type'] == 'CIMCharacterMarker':
                    #print(charSl["enable"])
                    if charSl["enable"]:
                        ret_sym = parseCharacterFill(charSl, max_size)
                        symbol = ret_sym[0]                        
                        if not symbol == '':
                            #print("char symb desc " + str(charSl['sl_idx']))                            
                            layers.append(symbol)                            
                            allSymbolLayers[ret_sym[1]] = symbol
                            if geometry_general_type_str == 'point':          
                                max_size = max(symbol.size(), max_size)            
            
            if not halo_symbols[idx] == '':
                layers = tweakHaloSymbol(layers, halo_symbols[idx])
                allSymbolLayers[len(allSymbolLayers) + 1] = layers[len(layers) - 1].clone()            
            
            ## Add the font fill 
            x = 0                                        
            for rl in layers:                
                ret.appendSymbolLayer(rl)                
                x = x + 1
            
            ## Delete default base layer if font marker filled or symbol mismatch
            #print("is Halo " + str(halo_symbols[idx] == ''))            
            print("ret count is " + str(ret.symbolLayerCount()))
            
            if ((len(layers) > 0 and noSolid ) or (layer_num < ret.symbolLayerCount()) or firstDash ):                                
                print("delete first symbol layer")
                ret.deleteSymbolLayer(0)
                if -1 in allSymbolLayers:
                    print("fix demo first layer")        
                    del(allSymbolLayers[-1])
            
            #print("symbol layers in object " + str(len(allSymbolLayers)))
            #print("ret symbols " + str(ret.symbolLayerCount()))
            
            ## Create ordered object from allSymbolLayers
            ordered_obj = OrderedDict(sorted(allSymbolLayers.items(), key=lambda t: t[0]))
            #print("len " + str(len(allSymbolLayers)))
            total_len = ret.symbolLayerCount()
            total_sym_len = len(ordered_obj)
            if -1 in ordered_obj  and not total_len in ordered_obj:
                print("!!!!!!!!!!!!Fix by total length")
                ordered_obj[total_len] = ordered_obj[-1].clone()
                del(ordered_obj[-1])
                                
            ## Create the new symbol from reveresed ordered_obj
            new_symbol = QgsSymbol.defaultSymbol(layer.geometryType())
            baseLayer = False
            try:
                if total_sym_len > 1:
                    for ord_sym_idx in reversed(ordered_obj):
                        #print("in reorder loop " + str(ord_sym_idx))
                        newSymbolLayer  = ordered_obj[ord_sym_idx].clone()
                        locked = ''
                        if not 'SymbolLayer' in newSymbolLayer.__class__.__name__:
                            #print("try symbolLayer")
                            newSymbolLayer = ordered_obj[ord_sym_idx].symbolLayer(0).clone()
                            locked = ordered_obj[ord_sym_idx].symbolLayer(0).isLocked()                                
                        else:
                            locked = ordered_obj[ord_sym_idx].isLocked()
                        #print("locked " + str(locked))    
                        newSymbolLayer.setLocked(locked)    
                        if not baseLayer:                                                        
                            if "SymbolLayer" in newSymbolLayer.__class__.__name__:                                
                                new_symbol.changeSymbolLayer(0, newSymbolLayer)
                            baseLayer = True
                        else:                                                        
                            if "SymbolLayer" in newSymbolLayer.__class__.__name__:                                
                                new_symbol.appendSymbolLayer(newSymbolLayer)                                
                else:
                    print("one layered symbol")
                    new_symbol = ret
            except:
                print("order fail")
                    
            #print("new symbol count"  + str(new_symbol.symbolLayerCount()))

            ## Create new category                            
            symbol_val_prep = symbol_values[idx][0] + ", " + symbol_values[idx][1] if len(symbol_values[idx]) > 1 else symbol_values[idx][0]            
            category = QgsRendererCategory(symbol_val_prep, new_symbol, symbols_labels[idx])            
            categories.append(category)
            
            #if len(symbol_values[idx] > 2):
            if not multi_cat[idx] == '':
                for extra_label in multi_cat[idx]:
                    symbol_val_prep1 = extra_label[0] + ", " + extra_label[1] if len(extra_label) > 1 else extra_label[0]            
                    category = QgsRendererCategory(symbol_val_prep1, new_symbol, symbols_labels[idx])            
                    categories.append(category)
                   
            
            idx = idx + 1
            
        ## Create renderer                        
        concat_str =  ", " + "', ', " + class_field2 + ")" if not class_field2 == "" else ")"
        renderer = QgsCategorizedSymbolRenderer("concat(" + class_field + concat_str, categories)
        #print(categories)
        
    elif renderers[rend_idx]['type'] == 'CIMSimpleRenderer' and simple_symbol:
        single_symbology = parseSimpleRenderer(renderers[rend_idx])
        if not single_symbology == '':
            #print('simple renderer')
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

