# qlyrx

### This project enables using ArcGIS Pro symbology files (.lyrx) directly in QGIS.

Important note: Esri’s former symbology format (*.lyr) is not supported.  
It is possible to generate a *.lyrx file by opening and saving your *.lyr file in ArcGIS Pro.

The plugin was built and tested on Windows using QGIS >= 3.4  
Tested on Ubuntu 18.04 as well.  

* Not all symbology types are currently supported, if something is missing please open an [issue](https://github.com/arc2qgis/lyrxtoqml/issues)
To use the working version of the plugin simply extract the `plugin/qlyrx` folder into your `qgis/python/plugins` folder.

### Installation
On Windows installations of OSGeo4W the folder should be in:  
*C:\OSGeo4W64\apps\qgis-ltr\python\plugins* or  
*C:\OSGeo4W64\apps\qgis\python\plugins* or  
*C:\OSGeo4W\apps\qgis-ltr\python\plugins* if you are using a 32bit OS   
  

If  the installation method fails for you, you can use the [qlyrx.zip](./plugin/qlyrx/qlyrx.zip) file and use the [**install from zip**](https://docs.qgis.org/testing/en/docs/user_manual/plugins/plugins.html#the-install-from-zip-tab) method within the QGIS plugin manager.  

### Functionality
- The plugin currently supports lyrx files with:  
   - Unique Values symbologies (1 or 2 fields classification) => QGIS Categorized 
   - Simple renderers  

- Esri/Qgis main conversions:  
    - CIMSolidFill  
    - CIMSolidStroke (=> QgsSimpleLineSymbolLayer or simple stroke)  
    - CIMHatchFill => QgsLinePatternFillSymbolLayer  
    - CIMCharacterMarker => QgsFontMarkerSymbolLayer w QgsPointPatternFillSymbolLayer or QgsMarkerLineSymbolLayer  
    - CIMGeometricEffectDashes => setCustomDashVector  
    - CIMPictureFill - creates svg from base64 image string  
    - CIMVectorMarker  
      - CIMCharacterMarker collection  
					or  
      - Use predefined shapes QgsSimpleMarkerSymbolLayer w QgsMarkerLineSymbolLayer  
				[Esri predefined shapes uses 'paths' WIP]  
- Known issues:  
   - QGIS does not offer support for grouping categories  
   - SVG fill is generated as black and white image  
   - Rendering paths shape arrays to QGIS shapes  
   - Some lyrx symbology uses Esri's fonts, without it, QGIS will fall back to a default font  
- Next:  
   - Graduated symbology support  
   - Labels support  
  

    
The plugin is named **qlyrx**  

You can save your styles, after creating the new symbology, as *.sld/*.qml files

To use the plugin select a *.lyrx* file and the layer it should style.


This plugin is provided under the [*MIT License*](LICENSE)
