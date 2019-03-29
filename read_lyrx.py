#%%

import json
import tkinter as tk
from tkinter.filedialog import askopenfilename # should be replace with QGIS qt


#%%

# TODO 
# get & set renderer_type 
# get & set geometry Types
# Build Renderers based on Geometry types
"""
Rule Based = RuleRenderer
Categorized = categorizedSymbol
Graduated = graduatedSymbol
No Symbol = nullSymbol
Single Symbol = singleSymbol

## Point Only, Might not be applicable for ArcGIS
Point Cluster = pointCluster
Point Displacement = pointDisplacement
Point Heatmap = heatmapRenderer

"""

renderer_type = None
geometry_type = None
qml_header = '<!DOCTYPE qgis PUBLIC "http://mrcc.com/qgis.dtd" "SYSTEM">\n \
<qgis labelsEnabled="0" simplifyAlgorithm="0" simplifyLocal="1" readOnly="0" hasScaleBasedVisibilityFlag="0" maxScale="0" version="3.4.6-Madeira" simplifyDrawingHints="1" simplifyDrawingTol="1" simplifyMaxScale="1" styleCategories="AllStyleCategories" minScale="1e+08">\n \
  <flags>\n \
    <Identifiable>1</Identifiable>\n \
    <Removable>1</Removable>\n \
    <Searchable>1</Searchable>\n \
  </flags>\n \
  <renderer-v2 symbollevels="0" forceraster="0" enableorderby="0" type="{}">'.format(renderer_type)
  
qml_suffix = 'let qml_suffix = `</renderer-v2><layerGeometryType>{}</layerGeometryType> \n\
</qgis>'.format(geometry_type)

#%%
# Templates need to be added or imported

#%%

def read_lyrx(file=None):
    if not file:
        root = tk.Tk()
        #root.withdraw()
        file = askopenfilename(filetypes=(("lyrx files", "*.lyrx"),
                                               ("All files", "*.*") ))
        root.update()
        root.destroy()
        with open(file, encoding="utf-8") as json_data:
            data = json.load(json_data)
        
        return data
        
#%%        

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
        
    return [round(r * 255), round(g* 255 ), round(b * 255)].join(",")
    
#%%
   
def cmyk2Rgb(cmyk_array):
    c = cmyk_array[0]
    m  = cmyk_array[1]
    y  = cmyk_array[2]
    k  = cmyk_array[3]
    
    r = int((1 - ((c + k)/100)) * 255)
    g = int((1 - ((m + k)/100)) * 255)
    b = int((1 - ((y + k)/100)) * 255)
    
    color = ', '.join([str(x) for x in [r,g,b]])
    return color
    

#%%

def mix(a, b, v):
    return (1-v)*a + v*b;