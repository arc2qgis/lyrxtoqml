from qgis.PyQt.QtCore import QCoreApplication, QVariant
from qgis.core import (Qgis,QgsProcessing, QgsProcessingAlgorithm, 
QgsProcessingParameterRasterLayer,QgsProcessingParameterNumber, 
QgsProcessingParameterRasterDestination, QgsProcessingParameterVectorLayer,
QgsProcessingParameterFile)
from qgis.utils import *
from PyQt5.QtGui import * 
import json
import qgis.utils

class RasterAlg(QgsProcessingAlgorithm):
    INPUT_LAYER = 'Layer to apply style to'
    INPUT_FILE = '.lyrx file'
    #INPUT_DOUBLE = 'INPUT_DOUBLE'
    #OUTPUT_RASTER_A = 'OUTPUT_RASTER_A'
    #OUTPUT_RASTER_B = 'OUTPUT_RASTER_B'

    def __init__(self):
        super().__init__()

    def name(self):
        return "ReadLyrx"

    def tr(self, text):
        return QCoreApplication.translate("ReadLyrx", text)

    def displayName(self):
        return self.tr("Read .lyrx Symbology")

    def group(self):
        return self.tr("Read LYRX Symbology")

    def groupId(self):
        return "ReadLyrx"

    def shortHelpString(self):
        return self.tr("Choose a layer to apply the .lyrx symbology for.\n\
        then choose a .lyrx file.\n\n\
        Currently only works for polygon fill colors")

    def helpUrl(self):
        return "https://github.com/arc2qgis/lyrxtoqml"

    def createInstance(self):
        return type(self)()

    def initAlgorithm(self, config=None):
        self.addParameter(
        QgsProcessingParameterVectorLayer(
            name="LayerToStyle",
            description="Layer To Apply Style To",
            types=[QgsProcessing.SourceType.TypeVector]
        )
    )
        self.addParameter(
        QgsProcessingParameterFile(
            name=self.INPUT_FILE,
            description="*.lyrx Style File"#,
            #extension="lyrx (*.lyrx)"
        )
    )
        
    def processAlgorithm(self, parameters, context, feedback):
        LayerToStyle = self.parameterAsVectorLayer( parameters,
            self.INPUT_LAYER,
            context)
        JSONfile = self.parameterAsFile(parameters, self.INPUT_FILE, context)
        print(JSONfile)
        #JSONfile = self.parameterDefinition('INPUT_FILE').valueAsPythonString(parameters['INPUT_FILE'], context)
        j_data = read_lyrx(JSONfile)
        layerDef = j_data['layerDefinitions']
        renderers = '';
        for p in layerDef :
            #print(p['name'])
            renderers = p['renderer']
            
        classes = renderers["groups"][0]["classes"]
        symbols_labels = []
        symbol_layers = []
        symbol_values = []
        for c in classes :
            #print(c)
            symbol_layers.append(readValueDef(c))
            symbols_labels.append(c['label'])
            symbol_values.append(c['values'][0]['fieldValues'])
        
        #print(symbol_values)
        categories = []
        
        idx = 0
        for sl in symbol_layers:
            symbol_def = checkSymbolType(sl)
            #print(symbol_def)
            #if not symbol_def['template'] == "hatch":
                #if not 'template_line_num' in symbol_def:
            ret = parseSolidFill(symbol_def)
            if not ret == '':
                category = QgsRendererCategory(symbol_values[idx][0], ret, symbols_labels[idx])
                categories.append(category)    
            idx = idx + 1
        
        
        #print(categories)
        
        renderer = QgsCategorizedSymbolRenderer('MAVAT_CODE', categories)
        
        # assign the created renderer to the layer
        if renderer is not None:
            iface.activeLayer().setRenderer(renderer)
        
        iface.LayerToStyle.triggerRepaint()    

        #results = {}
        #return results