import os
import arcpy
## Find all lyr files in a directory 
for root, dirs, files in os.walk(r"C:\Program Files\ArcGIS\Pro\Resources\"):
    for file in files:
        if file.endswith(".lyr"):
             print(os.path.join(root, file))
			 ## Save lyr as lyrx in the lyr's path
			 ##arcpy.SaveToLayerFile_management(os.path.join(root, file), os.path.join(root, file), 'ABSOLUTE')
			 ## Save lyr as lyrx in the project's path
             arcpy.SaveToLayerFile_management(os.path.join(root, file), file)