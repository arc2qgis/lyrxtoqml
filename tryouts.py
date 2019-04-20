import os
import sys
import json
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

# Tester: Add a layer with at least 3 categories and symbols with lines 
# Change the line symbols cap style to the different options to get the style number
layer = iface.activeLayer()

cat = layer.renderer().categories()

for c in cat:
    #print(c.label())
    sym = c.symbol()
    cnt = sym.symbolLayerCount()
    i = 0
    while i < cnt:
        sl = sym.symbolLayer(i)
        try:
            #print(sl.properties())
#            print(sl.penJoinStyle())
#            print(QgsSymbolLayerUtils.encodePenJoinStyle(sl.penJoinStyle()))
#            print(sl.penCapStyle())
#            print(QgsSymbolLayerUtils.encodePenCapStyle(sl.penCapStyle()))
            print(sl.__class__.__name__)
            classType = sl.__class__.__name__
            if "SVG" in classType:                
                print(c.label())
                print(sl.properties())
                print(sl.svgFilePath())
            #print(sl.getDataDefinedProperty(21))
        except:
            print("no cap")
        i = i+1
    