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
  

If  the installation method fails for you, download the [qlyrx.zip](./plugin/qlyrx/qlyrx.zip) file and install the plugin using the [**install from zip**](https://docs.qgis.org/testing/en/docs/user_manual/plugins/plugins.html#the-install-from-zip-tab) method within the QGIS plugin manager.  

### Functionality
- The plugin currently supports lyrx files with:  
   - Unique Values symbologies (1 or 2 fields classification) => QGIS Categorized 
   - Simple renderers  

- Esri/Qgis main conversions:  
    - CIMSolidFill  => QgsSymbol.defaultSymbol
    - CIMSolidStroke (=> QgsSimpleLineSymbolLayer or base symbol stroke)  
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
   - SVG base64 image fill is generated as black and white image  
   - Converting CIMVectorMarker from shape paths arrays to QGIS shapes is a customized tweak
   - Some lyrx symbology uses Esri's or extrnal **fonts**, without it, QGIS will fall back to a default font 
   - Problem in converting complex CIMVectorMarker properties
   - Symbol 'halo' is not supported in QGIS (our tweak is to duplicate and enlarge the bottom most symbol, problem when using with different symbol shapes)
- Next:  
   - Graduated symbology support  
   - Labels support  
  

    
The plugin is named **qlyrx**  

Save your styles, after creating the new symbology with the plugin as qgis native *.sld/*.qml formats

To use the plugin select a *.lyrx* file and the layer it should style.


This plugin is provided under the [*GPL2 License*](LICENSE)
