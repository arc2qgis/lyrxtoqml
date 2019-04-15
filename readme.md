# qlyrx

### This project allows you to read Arcgis Pro layer files (.lyrx) symbology directly into QGIS

The plugin was built and tested on Windows using QGIS >= 3.4 
* Not all symbology types are currently supported, if something is missing please open an [issue](https://github.com/arc2qgis/lyrxtoqml/issues)
To use the working version of the plugin simply extract the `plugin/qlyrx` folder into your `qgis/python/plugins` folder.
  
On Windows installations of OSGeo4W the folder should be in:  
*C:\OSGeo4W64\apps\qgis-ltr\python\plugins* or  
*C:\OSGeo4W64\apps\qgis\python\plugins* or  
*C:\OSGeo4W\apps\qgis-ltr\python\plugins* if you are using a 32bit OS   
Tested on Ubuntu 18.04 as well.  

If  the installation method fails for you, you can compress the `plugin/qlyrx` into a **.zip** file and use the **install from zip** method within the QGIS plugin manager.  
  
  
The plugin is named **qlyrx**  

you can save styles read with it using builtin QGIS methods.

to use the plugin select a *.lyrx* file and the layer it should style.


This plugin is provided under the [*MIT License*](LICENSE)
