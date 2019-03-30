from qgis.PyQt.QtCore import QCoreApplication, QVariant
from qgis.core import (QgsProcessing, QgsProcessingAlgorithm, 
QgsProcessingParameterRasterLayer,QgsProcessingParameterNumber, 
QgsProcessingParameterRasterDestination)

class RasterAlg(QgsProcessingAlgorithm):
    INPUT_RASTER_A = 'INPUT_RASTER_A'
    INPUT_RASTER_B = 'INPUT_RASTER_B'
    INPUT_DOUBLE = 'INPUT_DOUBLE'
    OUTPUT_RASTER_A = 'OUTPUT_RASTER_A'
    OUTPUT_RASTER_B = 'OUTPUT_RASTER_B'

    def __init__(self):
        super().__init__()

    def name(self):
        return "RasterAlg"

    def tr(self, text):
        return QCoreApplication.translate("RasterAlg", text)

    def displayName(self):
        return self.tr("RasterAlg script")

    def group(self):
        return self.tr("RasterAlgs")

    def groupId(self):
        return "RasterAlgs"

    def shortHelpString(self):
        return self.tr("RasterAlg script without logic")

    def helpUrl(self):
        return "https://qgis.org"

    def createInstance(self):
        return type(self)()

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterRasterLayer(
            self.INPUT_RASTER_A,
            self.tr("Input Raster A"), None, False))
        self.addParameter(QgsProcessingParameterRasterLayer(
            self.INPUT_RASTER_B,
            self.tr("Input Raster B"), None, False))
        self.addParameter(QgsProcessingParameterNumber(
            self.INPUT_DOUBLE, 
            self.tr("Input Double"), 
            QgsProcessingParameterNumber.Double,
            QVariant(1.0)))
        self.addParameter(QgsProcessingParameterRasterDestination(
            self.OUTPUT_RASTER_A,
            self.tr("Output Raster A"),
            None, False))
        self.addParameter(QgsProcessingParameterRasterDestination(
            self.OUTPUT_RASTER_B,
            self.tr("Output Raster B"),
            None, False))

    def processAlgorithm(self, parameters, context, feedback):
        raster_a = self.parameterAsRasterLayer(parameters, self.INPUT_RASTER_A, context)
        raster_b = self.parameterAsRasterLayer(parameters, self.INPUT_RASTER_B, context)
        double_val = self.parameterAsDouble(parameters, self.INPUT_DOUBLE,context)
        output_path_raster_a = self.parameterAsOutputLayer(parameters, self.OUTPUT_RASTER_A, context)
        output_path_raster_b = self.parameterAsOutputLayer(parameters, self.OUTPUT_RASTER_B, context)

        #DO SOME CALCULATION

        results = {}
        results[self.OUTPUT_RASTER_A] = output_path_raster_a
        results[self.OUTPUT_RASTER_B] = output_path_raster_b
        return results