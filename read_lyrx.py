#%%

import json
import tkinter as tk
from tkinter.filedialog import askopenfilename


#file = "C:/Projects/lyrtoqml/lyrx samples/bbb.lyrx"
#file = "C:/Projects/lyrtoqml/lyrx samples/plan2.lyrx"
#with open(file, encoding="utf-8") as json_data:
#    d = json.load(json_data)

#rules = {}


#ldefs = d["layerDefinitions"][0]
"""
fields = []
if "fieldDescriptions" in ldefs["featureTable"]:
    for field_desc in ldefs["featureTable"]["fieldDescriptions"]:
        fields.append(field_desc["fieldName"])



labelClasses = ldefs["labelClasses"][0]
renderer = ldefs["renderer"]
field = renderer["fields"]
symbols = renderer["defaultSymbol"]
defaultSymbol = symbols["symbol"]
groups = renderer["groups"][0]["classes"]
"""        
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