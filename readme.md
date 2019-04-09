# lyrxtoqml

### This project allows to read Arcgis Pro layer files (.lyrx) symbology directly into QGIS

The plugin was built and tested on Windows using QGIS >= 3.4  
* Not all symbology types are currently supported, if something is missing please open an [issue](https://github.com/arc2qgis/lyrxtoqml/issues)
To use the working version of the plugin simply extract the `plugin/readLyrx` folder into your `qgis/python/plugins` folder.
  
On Windows installations of OSGeo4W the folder should be in:
*C:\OSGeo4W64\apps\qgis-ltr\python\plugins* or  
*C:\OSGeo4W64\apps\qgis\python\plugins* or  
*C:\OSGeo4W\apps\qgis-ltr\python\plugins* if you are using a 32bit OS  

The plugin is named **readLyrx** because it currently does not convert to other formats but you can save styles using builtin QGIS methods.

to use the plugin select a *.lyrx* file and the layer it should style.
