import os
import sys, traceback
import json
from qgis.core import *
import qgis.utils
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

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
            #print(sl.__class__.__name__)
            classType = sl.__class__.__name__
            if "Marker" in classType:     
                print(sl.__class__.__name__)
                print("marker number " + str(i))    
                print(c.label())
                print(sl.properties())
                print(sl.subSymbol().symbolLayer(0))
                marker = sl.subSymbol().symbolLayer(0)
                if 'SimpleMarker'  in marker.__class__.__name__:
                    print(marker.properties())
                    print(marker.prepareMarkerPath(marker.shape()))
                    print(marker.shape())
                    print(marker.availableShapes())
                    
                    new_poly = QPolygonF()
                    #print(marker.shapeToPolygon(marker.shape(), new_poly))
                    #shapeToPolygon
                    #print(marker.layerType())
                    
                    
                #print(sl.svgFilePath())
            #print(sl.getDataDefinedProperty(21))
        except Exception:
            print("no cap")
            print(traceback.format_exc().splitlines())
        i = i+1
    