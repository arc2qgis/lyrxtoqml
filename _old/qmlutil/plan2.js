var layerDef ={
    "type" : "CIMLayerDocument",
    "version" : "2.1.0",
    "build" : 10257,
    "layers" : [
      "CIMPATH=map6/__________.xml"
    ],
    "layerDefinitions" : [
      {
        "type" : "CIMFeatureLayer",
        "name" : "יעודי קרקע",
        "uRI" : "CIMPATH=map6/__________.xml",
        "sourceModifiedTime" : {
          "type" : "TimeInstant"
        },
        "metadataURI" : "CIMPATH=Metadata/39c03825a8c417db73d5f0b04c8b9825.xml",
        "useSourceMetadata" : false,
        "description" : "640967",
        "layerElevation" : {
          "type" : "CIMLayerElevationSurface",
          "mapElevationID" : "{78F01D53-FA67-4776-A010-20DE294C68F0}"
        },
        "layerType" : "Operational",
        "showLegends" : true,
        "visibility" : true,
        "displayCacheType" : "Permanent",
        "maxDisplayCacheAge" : 5,
        "showPopups" : true,
        "serviceLayerID" : -1,
        "refreshRate" : -1,
        "refreshRateUnit" : "esriTimeUnitsSeconds",
        "autoGenerateFeatureTemplates" : true,
        "featureElevationExpression" : "0",
        "featureTable" : {
          "type" : "CIMFeatureTable",
          "displayField" : "LABEL",
          "editable" : true,
          "timeFields" : {
            "type" : "CIMTimeTableDefinition"
          },
          "timeDefinition" : {
            "type" : "CIMTimeDataDefinition"
          },
          "timeDisplayDefinition" : {
            "type" : "CIMTimeDisplayDefinition",
            "timeInterval" : 0,
            "timeIntervalUnits" : "esriTimeUnitsHours",
            "timeOffsetUnits" : "esriTimeUnitsYears"
          },
          "dataConnection" : {
            "type" : "CIMStandardDataConnection",
            "workspaceConnectionString" : "DATABASE=C:\\MAVAT_APPL\\MoinServer\\temp\\shp",
            "workspaceFactory" : "Shapefile",
            "dataset" : "MVT_PLAN",
            "datasetType" : "esriDTFeatureClass"
          },
          "studyAreaSpatialRel" : "esriSpatialRelUndefined",
          "searchOrder" : "esriSearchOrderSpatial"
        },
        "htmlPopupEnabled" : true,
        "htmlPopupFormat" : {
          "type" : "CIMHtmlPopupFormat",
          "htmlUseCodedDomainValues" : true,
          "htmlPresentationStyle" : "TwoColumnTable"
        },
        "isFlattened" : true,
        "selectable" : false,
        "selectionSymbol" : {
          "type" : "CIMSymbolReference",
          "symbol" : {
            "type" : "CIMPolygonSymbol",
            "symbolLayers" : [
              {
                "type" : "CIMSolidStroke",
                "enable" : true,
                "capStyle" : "Round",
                "joinStyle" : "Round",
                "lineStyle3D" : "Strip",
                "miterLimit" : 10,
                "width" : 2,
                "color" : {
                  "type" : "CIMRGBColor",
                  "values" : [
                    0,
                    255,
                    255,
                    100
                  ]
                }
              }
            ]
          }
        },
        "featureCacheType" : "None",
        "labelClasses" : [
          {
            "type" : "CIMLabelClass",
            "expression" : "[NUM]",
            "expressionEngine" : "VBScript",
            "featuresToLabel" : "AllVisibleFeatures",
            "maplexLabelPlacementProperties" : {
              "type" : "CIMMaplexLabelPlacementProperties",
              "featureType" : "Line",
              "avoidPolygonHoles" : true,
              "canOverrunFeature" : true,
              "canPlaceLabelOutsidePolygon" : true,
              "canRemoveOverlappingLabel" : true,
              "canStackLabel" : true,
              "connectionType" : "Unambiguous",
              "constrainOffset" : "NoConstraint",
              "contourAlignmentType" : "Page",
              "contourLadderType" : "Straight",
              "contourMaximumAngle" : 90,
              "enableConnection" : true,
              "featureWeight" : 100,
              "fontHeightReductionLimit" : 4,
              "fontHeightReductionStep" : 0.5,
              "fontWidthReductionLimit" : 90,
              "fontWidthReductionStep" : 5,
              "graticuleAlignmentType" : "Straight",
              "labelBuffer" : 15,
              "labelLargestPolygon" : true,
              "labelPriority" : -1,
              "labelStackingProperties" : {
                "type" : "CIMMaplexLabelStackingProperties",
                "stackAlignment" : "ChooseBest",
                "maximumNumberOfLines" : 3,
                "minimumNumberOfCharsPerLine" : 3,
                "maximumNumberOfCharsPerLine" : 24
              },
              "lineFeatureType" : "General",
              "linePlacementMethod" : "OffsetCurvedFromLine",
              "maximumLabelOverrun" : 36,
              "maximumLabelOverrunUnit" : "Point",
              "minimumFeatureSizeUnit" : "Map",
              "multiPartOption" : "OneLabelPerPart",
              "offsetAlongLineProperties" : {
                "type" : "CIMMaplexOffsetAlongLineProperties",
                "placementMethod" : "BestPositionAlongLine",
                "labelAnchorPoint" : "CenterOfLabel",
                "distanceUnit" : "Percentage",
                "useLineDirection" : true
              },
              "pointExternalZonePriorities" : {
                "type" : "CIMMaplexExternalZonePriorities",
                "aboveLeft" : 4,
                "aboveCenter" : 2,
                "aboveRight" : 1,
                "centerRight" : 3,
                "belowRight" : 5,
                "belowCenter" : 7,
                "belowLeft" : 8,
                "centerLeft" : 6
              },
              "pointPlacementMethod" : "AroundPoint",
              "polygonAnchorPointType" : "GeometricCenter",
              "polygonBoundaryWeight" : 200,
              "polygonExternalZones" : {
                "type" : "CIMMaplexExternalZonePriorities",
                "aboveLeft" : 4,
                "aboveCenter" : 2,
                "aboveRight" : 1,
                "centerRight" : 3,
                "belowRight" : 5,
                "belowCenter" : 7,
                "belowLeft" : 8,
                "centerLeft" : 6
              },
              "polygonFeatureType" : "General",
              "polygonInternalZones" : {
                "type" : "CIMMaplexInternalZonePriorities",
                "center" : 1
              },
              "polygonPlacementMethod" : "CurvedInPolygon",
              "primaryOffset" : 1,
              "primaryOffsetUnit" : "Point",
              "removeExtraWhiteSpace" : true,
              "repetitionIntervalUnit" : "Map",
              "rotationProperties" : {
                "type" : "CIMMaplexRotationProperties",
                "rotationType" : "Arithmetic",
                "alignmentType" : "Straight"
              },
              "secondaryOffset" : 100,
              "strategyPriorities" : {
                "type" : "CIMMaplexStrategyPriorities",
                "stacking" : 1,
                "overrun" : 2,
                "fontCompression" : 3,
                "fontReduction" : 4,
                "abbreviation" : 5
              },
              "thinningDistanceUnit" : "Map",
              "truncationMarkerCharacter" : ".",
              "truncationMinimumLength" : 1,
              "truncationPreferredCharacters" : "aeiou"
            },
            "minimumScale" : 10000,
            "name" : "small",
            "priority" : 5,
            "standardLabelPlacementProperties" : {
              "type" : "CIMStandardLabelPlacementProperties",
              "featureType" : "Line",
              "featureWeight" : "High",
              "labelWeight" : "High",
              "numLabelsOption" : "OneLabelPerShape",
              "lineLabelPosition" : {
                "type" : "CIMStandardLineLabelPosition",
                "above" : true,
                "inLine" : true,
                "parallel" : true
              },
              "lineLabelPriorities" : {
                "type" : "CIMStandardLineLabelPriorities",
                "aboveStart" : 3,
                "aboveAlong" : 3,
                "aboveEnd" : 3,
                "centerStart" : 3,
                "centerAlong" : 3,
                "centerEnd" : 3,
                "belowStart" : 3,
                "belowAlong" : 3,
                "belowEnd" : 3
              },
              "pointPlacementMethod" : "AroundPoint",
              "pointPlacementPriorities" : {
                "type" : "CIMStandardPointPlacementPriorities",
                "aboveLeft" : 2,
                "aboveCenter" : 2,
                "aboveRight" : 1,
                "centerLeft" : 3,
                "centerRight" : 2,
                "belowLeft" : 3,
                "belowCenter" : 3,
                "belowRight" : 2
              },
              "rotationType" : "Arithmetic",
              "polygonPlacementMethod" : "AlwaysHorizontal",
              "placeOnlyInsidePolygon" : true,
              "allowOverlappingLabels" : true
            },
            "textSymbol" : {
              "type" : "CIMSymbolReference",
              "symbol" : {
                "type" : "CIMTextSymbol",
                "blockProgression" : "TTB",
                "callout" : {
                  "type" : "CIMPointSymbolCallout",
                  "lineStyle" : "Base",
                  "pointSymbol" : {
                    "type" : "CIMPointSymbol",
                    "symbolLayers" : [
                      {
                        "type" : "CIMCharacterMarker",
                        "enable" : true,
                        "colorLocked" : true,
                        "anchorPointUnits" : "Relative",
                        "dominantSizeAxis3D" : "Y",
                        "size" : 28.000000000000007,
                        "billboardMode3D" : "FaceNearPlane",
                        "characterIndex" : 41,
                        "fontFamilyName" : "ESRI Default Marker",
                        "fontStyleName" : "Regular",
                        "fontType" : "Unspecified",
                        "scaleX" : 1,
                        "symbol" : {
                          "type" : "CIMPolygonSymbol",
                          "symbolLayers" : [
                            {
                              "type" : "CIMSolidFill",
                              "enable" : true,
                              "color" : {
                                "type" : "CIMRGBColor",
                                "values" : [
                                  0,
                                  92,
                                  230,
                                  100
                                ]
                              }
                            }
                          ]
                        },
                        "scaleSymbolsProportionally" : true,
                        "respectFrame" : true
                      }
                    ],
                    "haloSize" : 1,
                    "scaleX" : 1,
                    "angleAlignment" : "Map"
                  },
                  "backgroundScale" : "PropUniform"
                },
                "compatibilityMode" : true,
                "depth3D" : 1,
                "drawSoftHyphen" : true,
                "extrapolateBaselines" : true,
                "flipAngle" : 90,
                "fontEffects" : "Normal",
                "fontEncoding" : "Unicode",
                "fontFamilyName" : "Arial",
                "fontStyleName" : "Bold",
                "fontType" : "Unspecified",
                "haloSize" : 1,
                "height" : 8,
                "hinting" : "Default",
                "horizontalAlignment" : "Left",
                "kerning" : false,
                "letterSpacing" : 1,
                "letterWidth" : 100,
                "ligatures" : true,
                "lineGapType" : "ExtraLeading",
                "shadowColor" : {
                  "type" : "CIMRGBColor",
                  "values" : [
                    0,
                    0,
                    0,
                    100
                  ]
                },
                "symbol" : {
                  "type" : "CIMPolygonSymbol",
                  "symbolLayers" : [
                    {
                      "type" : "CIMSolidFill",
                      "enable" : true,
                      "color" : {
                        "type" : "CIMRGBColor",
                        "values" : [
                          0,
                          92,
                          230,
                          100
                        ]
                      }
                    }
                  ]
                },
                "textCase" : "Normal",
                "textDirection" : "LTR",
                "verticalAlignment" : "Bottom",
                "verticalGlyphOrientation" : "Right",
                "wordSpacing" : 100,
                "billboardMode3D" : "FaceNearPlane"
              }
            },
            "useCodedValue" : true,
            "visibility" : true,
            "iD" : -1
          }
        ],
        "labelVisibility" : true,
        "renderer" : {
          "type" : "CIMUniqueValueRenderer",
          "defaultLabel" : "יעודים אחרים",
          "defaultSymbol" : {
            "type" : "CIMSymbolReference",
            "symbol" : {
              "type" : "CIMPolygonSymbol",
              "symbolLayers" : [
                {
                  "type" : "CIMSolidStroke",
                  "enable" : true,
                  "capStyle" : "Round",
                  "joinStyle" : "Round",
                  "lineStyle3D" : "Strip",
                  "miterLimit" : 10,
                  "width" : 0.40000000000000002,
                  "color" : {
                    "type" : "CIMRGBColor",
                    "values" : [
                      0,
                      0,
                      0,
                      100
                    ]
                  }
                }
              ]
            }
          },
          "fields" : [
            "MAVAT_CODE"
          ],
          "groups" : [
            {
              "type" : "CIMUniqueValueGroup",
              "classes" : [
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "10"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים א",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "20"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים א1-יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "30"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים א2-יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "40"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים א3- יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    51,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "50"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ב",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              25,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "60"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ב1 - יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              25,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "70"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ב2-יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    95,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              25,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "80"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ב3-יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    51,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              25,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "90"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ג",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "100"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ג1-יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "110"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ג2-יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "120"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ג3-יעוד שהתבטל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "130"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ד",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "140"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    51,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    51,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "150"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים בישוב כפרי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.7000000000000002,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              127,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000609919999999,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "160"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "משק עזר",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 8,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    126,
                                    255,
                                    126,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 17
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "170"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעסוקה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              0,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "200"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "210"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "משרדים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              191,
                              127,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "220"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעשיה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              60,
                              20,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "230"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "אחסנה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              204,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              60,
                              20,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "240"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעשיה עתירת ידע",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              191,
                              127,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              60,
                              20,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "250"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעשיה קלה ומלאכה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              91,
                              91,
                              91,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              60,
                              20,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "260"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              127,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "280"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "עירוני מעורב",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    186,
                                    186,
                                    186,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 17
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000609919999999,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              255,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "290"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבני משק",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 8,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    126,
                                    255,
                                    126,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 17
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              186,
                              186,
                              186,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "300"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות ציבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "400"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות ציבור לחינוך",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              63,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "410"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות ציבור למינהל ציבורי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              91,
                              91,
                              91,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "420"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות ציבור לתרבות ולפנאי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Rounded",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              127,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "430"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות ציבור לבריאות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "440"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות ציבור לדת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "450"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות ציבור לחרום ולהצלה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "460"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים מוסדות ציבור ושצפ",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    255,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 9.8994949366116654,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -9.8994949366116654
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    223,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 17.677669529663689,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -17.677669529663689
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28349999999999997,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              153,
                              102,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "461"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "חקלאי משומר",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    38,
                                    115,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.2427113977974038,
                          "rotation" : 45,
                          "separation" : 33,
                          "offsetY" : -4.2427113977974038
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              56,
                              168,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "462"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבני ציבור בשצפ",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    152,
                                    230,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.2427113977974038,
                          "rotation" : 45,
                          "separation" : 32,
                          "offsetY" : -4.2427113977974038
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              205,
                              170,
                              102,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "463"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              159,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "600"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "אירוח כפרי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              127,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              159,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "610"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מלונאות (אכסון מלונאי)",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              132,
                              132,
                              132,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              126,
                              159,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "620"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "אטרקציה תירותית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8062936000000001,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              127,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              127,
                              159,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "630"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטחים פתוחים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "650"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "קרקע חקלאית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              255,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "660"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "חקלאי פתוח",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    255,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 12.026330713064564,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -12.026330713064564
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 24.041630560342618,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -24.041630560342618
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              255,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "661"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטח ציבורי פתוח",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              25,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "670"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטח פרטי פתוח",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              204,
                              51,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              25,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "680"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "ספורט ונופש",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              153,
                              38,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              25,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "690"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "פארק/גן ציבורי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    153,
                                    38,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    153,
                                    38,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              25,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "700"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              100,
                              20,
                              80,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "710"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שמורת טבע",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMCMYKColor",
                                  "values" : [
                                    100,
                                    40,
                                    85,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    153,
                                    38,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              114,
                              153,
                              76,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "720"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "גן לאומי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 12
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 12
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              114,
                              153,
                              76,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "730"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "נחל/תעלה/מאגר מים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "740"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "גן ארועים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              51,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "750"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "טיילת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.47094999999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.5,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              127,
                              31,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "760"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "חוף רחצה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    255,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              100,
                              40,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "770"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "ככר עירונית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    60,
                                    199,
                                    78,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 12
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    60,
                                    199,
                                    78,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 135,
                          "separation" : 12
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              220,
                              165,
                              109,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "780"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              91,
                              91,
                              91,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "800"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מרכז תחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    132,
                                    132,
                                    132,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 12
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "810"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דרך מאושרת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              178,
                              102,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "820"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דרך מוצעת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "830"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דרך משולבת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 17
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              191,
                              255,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "840"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דרך ו/או טיפול נופי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    204,
                                    51,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 55,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 9.0106724871789101,
                          "rotation" : 55,
                          "separation" : 22.677099999999999,
                          "offsetY" : -6.3093407998615065
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "850"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסילה ו/או טיפול נופי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    3,
                                    223,
                                    61,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.2427113977974038,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -4.2427113977974038
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              156,
                              156,
                              156,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "855"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שביל",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              153,
                              114,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "860"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "חניון",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    132,
                                    132,
                                    132,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    132,
                                    132,
                                    132,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "870"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסילה מאושרת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              91,
                              91,
                              91,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "880"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסילה מוצעת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    51,
                                    51,
                                    51,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "890"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטח לתפעול מסילה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    51,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    51,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "900"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תחנת תחבורה ציבורית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              153,
                              0,
                              153,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "902"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תחנת תדלוק",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "910"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מרכז להדרכת נהיגה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              63,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "920"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מפגש דרך-מסילה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    118,
                                    118,
                                    118,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              62,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "930"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מעגנה-תחום יבשתי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "931"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מעגנה-תחום ימי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    63,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "932"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "נמל תעופה-כללי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              223,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "935"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "נמל תעופה-מסלולים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              223,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "936"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "נמל תעופה-אזורי שירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMCMYKColor",
                                  "values" : [
                                    0,
                                    100,
                                    100,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              223,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "937"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דרך נופית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    255,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              0,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "940"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטח לתכנון בעתיד",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    132,
                                    132,
                                    132,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              255,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "950"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "רצועת תשתיות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    77,
                                    168,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 10
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    77,
                                    168,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 135,
                          "separation" : 10
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.40000000000000002,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "color" : {
                            "type" : "CIMHSVColor",
                            "values" : [
                              137,
                              22,
                              99,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "955"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "כריה וחציבה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              153,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              127,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "960"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "פסולת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.0000035277848334,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              127,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              127,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "970"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "בית קברות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    153,
                                    38,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    153,
                                    38,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.3386
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              100,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "980"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מחנה צבאי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              111,
                              63,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "990"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "גבול הודעה בדבר הכנת תכנית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 3,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "994"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יעוד עפ\"י תכנית מאושרת אחרת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    153,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 15
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              255,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "995"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגבלות בניה ופיתוח",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              102,
                              178,
                              204,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    102,
                                    178,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              255,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "996"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגבלות בניה ופיתוח ב",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              159,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Bevel",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    85,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : -2.8284271247461903,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : 2.8284271247461903
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              159,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Bevel",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 9,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    132,
                                    168,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 0.70710678118654757,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -0.70710678118654757
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "997"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "גבול תכנית ארצית/מחוזית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 3,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "998"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטח שהתכנית אינה חלה עליו",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              127,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "999"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ומסחר",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.0088004745808936,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -4.0088004745808936
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1000"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד ומסחר",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.52916772500211673,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 3,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1001"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, מסחר ותעסוקה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    223,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              156,
                              156,
                              156,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1050"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, מסחר ותעסוקה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 14.030766305694071,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -14.030766305694071
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 6.0131653565322818,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -6.0131653565322818
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1051"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ומשרדים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.7781745930520234,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -7.7781745930520234
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1200"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד ומשרדים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.7781745930520234,
                          "rotation" : 45,
                          "separation" : 22,
                          "offsetY" : -7.7781745930520234
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1201"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ותעשיה עתירת ידע",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.2426406871192857,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -4.2426406871192857
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1211"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד ותעשיה עתירת ידע",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1212"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.7781745930520234,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -7.7781745930520234
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1221"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 3.5355339059327378,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -3.5355339059327378
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1222"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ומבנים ומוסדות ציבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 11.313708498984761,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -11.313708498984761
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1250"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד ומבנים ומוסדות ציבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.70555696666948897,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1300"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1311"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677119999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1312"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 6.3639610306789285,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -6.3639610306789285
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1321"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 3.5355339059327378,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -3.5355339059327378
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1322"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ודיור מיוחד",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.4173199999999999,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 11.338559999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1350"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים ואירוח כפרי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 10.606601717798213,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -10.606601717798213
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 1.4142135623730951,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -1.4142135623730951
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1352"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים,מסחר ומבנים ומוסדות ציבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28349999999999997,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              253,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1410"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד,מסחר ומבנים ומוסדות ציבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1411"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, מסחר ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.0710678118654755,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -7.0710678118654755
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 14.849242404917499,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -14.849242404917499
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1420"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, מסחר ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1421"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, מסחר ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.0710678118654755,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -7.0710678118654755
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1430"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד,מסחר ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    125,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1431"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, מסחר ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.2426406871192857,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -4.2426406871192857
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 12.727922061357857,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -12.727922061357857
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1440"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, מסחר ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1441"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, מסחר ומעגנה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.4852813742385713,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.4852813742385713
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 16.970562748477143,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -16.970562748477143
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1460"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, מסחר ומעגנה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    173,
                                    173,
                                    173,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015679999999996
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1461"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, תעסוקה ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 11.313708498984761,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -11.313708498984761
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 19.091883092036785,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -19.091883092036785
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1470"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, תעסוקה ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 12.026330713064564,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -12.026330713064564
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.0088004745808936,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -4.0088004745808936
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1471"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים,תעסוקה ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.0710678118654755,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -7.0710678118654755
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 14.849242404917499,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -14.849242404917499
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1480"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד,תעסוקה ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1481"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, תעסוקה ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 9.8994949366116654,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -9.8994949366116654
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 17.677669529663689,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -17.677669529663689
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1482"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, תעסוקה ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1483"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, תעסוקה ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.2426406871192857,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -4.2426406871192857
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 12.727922061357857,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -12.727922061357857
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1484"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, תעסוקה ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1485"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, תעסוקה ומעגנה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.4852813742385713,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.4852813742385713
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 16.970562748477143,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -16.970562748477143
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1488"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, תעסוקה ומעגנה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1489"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, תירות ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1490"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, תירות ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1491"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים,תירות ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 9.8994949366116654,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -9.8994949366116654
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 17.677669529663689,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -17.677669529663689
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1492"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד,תירות ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 10.021965831113176,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -10.021965831113176
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 2.0043648819513877,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -2.0043648819513877
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1493"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מגורים, תירות ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 12.020815280171309,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -12.020815280171309
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 3.5355339059327378,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -3.5355339059327378
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1494"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "דיור מיוחד, תירות ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 12.026330713064564,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -12.026330713064564
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.0088004745808936,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -4.0088004745808936
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              223,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1495"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ותעשיה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.4852813742385713,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -8.4852813742385713
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1500"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ותעסוקה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 2.8284271247461903,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -2.8284271247461903
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1502"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1504"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ותעשיה חקלאית",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    255,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 9.1923881554251192,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -9.1923881554251192
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1506"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 3.5355339059327378,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -3.5355339059327378
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1510"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ומשרדים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.4852813742385713,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -8.4852813742385713
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1520"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ותעשיה עתירת ידע",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              191,
                              127,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1530"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ותעשיה קלה ומלאכה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              91,
                              91,
                              91,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1540"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 5.6568542494923806,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -5.6568542494923806
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1550"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    126,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1560"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר, תעסוקה ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    126,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0175726648905403,
                          "rotation" : 45,
                          "separation" : 34.015679999999996,
                          "offsetY" : -8.0175726648905403
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1562"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר, תחבורה ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    186,
                                    186,
                                    186,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 2.0043648819513877,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -2.0043648819513877
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    126,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 10.021965831113176,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -10.021965831113176
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              155,
                              0,
                              62,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1563"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ואירוח כפרי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              126,
                              255,
                              126,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    126,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 2.8284271247461903,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -2.8284271247461903
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1.2,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1564"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ספורט ונופש",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              185,
                              46,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    186,
                                    186,
                                    186,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 3.5355339059327378,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -3.5355339059327378
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              191,
                              255,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1565"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר ואחסנה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              204,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 3.5355339059327378,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -3.5355339059327378
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              0,
                              0,
                              0,
                              32,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1570"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר, תעסוקה ומתקנים הנדסיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 2.8284271247461903,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -2.8284271247461903
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 11.313708498984761,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -11.313708498984761
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1572"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר, תעסוקה ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.4852813742385713,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.4852813742385713
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 16.263455967290593,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -16.263455967290593
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1574"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר,תעסוקה ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 12.026330713064564,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -12.026330713064564
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    0,
                                    127,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.0088004745808936,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -4.0088004745808936
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1576"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר,תירות ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              173,
                              173,
                              173,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1578"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מסחר,תחבורה ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    191,
                                    191,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    221,
                                    165,
                                    110,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              252,
                              0,
                              62,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1579"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעשיה, תעשיה קלה ומלאכה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              91,
                              91,
                              91,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              0,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1580"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעסוקה ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 3.5355339059327378,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -3.5355339059327378
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              0,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1590"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעסוקה ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.9497474683058327,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -4.9497474683058327
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              0,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1600"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות צבור ומתקנים הנדסים ",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    127,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              153,
                              102,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1602"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות צבור ותחבורה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    0,
                                    63,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.7781745930520234,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -7.7781745930520234
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              153,
                              102,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1604"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות צבור ומשרדים ",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.2426406871192857,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -4.2426406871192857
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              40,
                              60,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1610"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעסוקה,מבנים ומוסדות צבור ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 8.0176009491617872,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -8.0176009491617872
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    153,
                                    102,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 34.015700000000002
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              0,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1620"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעשיה ומשרדים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    127,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.0710678118654755,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -7.0710678118654755
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMCMYKColor",
                            "values" : [
                              20,
                              60,
                              20,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1630"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "תעשיה ואחסנה",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              0,
                              204,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    204,
                                    102,
                                    204,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              0,
                              127,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1640"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "מבנים ומוסדות צבור ותירות",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    127,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 9.8994949366116654,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -9.8994949366116654
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              204,
                              153,
                              102,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1650"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטחים פתוחים ומתקנים הנדסים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    191,
                                    255,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 4.9497474683058327,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -4.9497474683058327
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              126,
                              126,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1660"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטחים פתוחים ומבנים ומוסדות צבור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    221,
                                    165,
                                    110,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 7.0710678118654755,
                          "rotation" : 45,
                          "separation" : 22.677099999999999,
                          "offsetY" : -7.0710678118654755
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              126,
                              255,
                              126,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1670"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "קרקע חקלאית ומתקנים הנדסים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 11,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    126,
                                    126,
                                    255,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677099999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              133,
                              255,
                              133,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1680"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "קרקע חקלאית ונופש כפרי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 10,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    126,
                                    159,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 1.4142135623730951,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -1.4142135623730951
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 10,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    126,
                                    255,
                                    126,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "offsetX" : 17.677669529663689,
                          "rotation" : 45,
                          "separation" : 34.015700000000002,
                          "offsetY" : -17.677669529663689
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1681"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "כריה, חציבה ופסולת",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "effects" : [
                            {
                              "type" : "CIMGeometricEffectOffset",
                              "method" : "Mitered",
                              "offset" : -1.4173199999999999,
                              "option" : "Fast"
                            }
                          ],
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Square",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 2.8346399999999998,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              255,
                              127,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 12,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    153,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 22.677119999999999
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28346399999999994,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              127,
                              127,
                              255,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "1690"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער נטע אדם מוצע",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "effects" : [
                                  {
                                    "type" : "CIMGeometricEffectOffset",
                                    "method" : "Mitered",
                                    "offset" : 1,
                                    "option" : "Fast"
                                  }
                                ],
                                "enable" : true,
                                "colorLocked" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    56,
                                    168,
                                    0,
                                    100
                                  ]
                                }
                              },
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 5.6692999999999998
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "effects" : [
                                  {
                                    "type" : "CIMGeometricEffectOffset",
                                    "method" : "Mitered",
                                    "offset" : 1,
                                    "option" : "Fast"
                                  }
                                ],
                                "enable" : true,
                                "colorLocked" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    56,
                                    168,
                                    0,
                                    100
                                  ]
                                }
                              },
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 5.6692999999999998
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5663"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער נטע אדם קיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "effects" : [
                                  {
                                    "type" : "CIMGeometricEffectOffset",
                                    "method" : "Mitered",
                                    "offset" : 0.5,
                                    "option" : "Fast"
                                  }
                                ],
                                "enable" : true,
                                "colorLocked" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 0.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    56,
                                    168,
                                    0,
                                    100
                                  ]
                                }
                              },
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 0.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 45,
                          "separation" : 2
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "effects" : [
                                  {
                                    "type" : "CIMGeometricEffectOffset",
                                    "method" : "Mitered",
                                    "offset" : 0.5,
                                    "option" : "Fast"
                                  }
                                ],
                                "enable" : true,
                                "colorLocked" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 0.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    56,
                                    168,
                                    0,
                                    100
                                  ]
                                }
                              },
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Butt",
                                "joinStyle" : "Miter",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 0.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : -45,
                          "separation" : 2
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5664"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער טבעי לטיפוח",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    230,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "separation" : 5.6692999999999998
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              168,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    230,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 90,
                          "separation" : 5.6692999999999998
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5665"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער פארק מוצע",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              },
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "colorLocked" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    168,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 90,
                          "separation" : 5.6692999999999998
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5666"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער פארק חופי",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "effects" : [
                                  {
                                    "type" : "CIMGeometricEffectDashes",
                                    "dashTemplate" : [
                                      4,
                                      6
                                    ],
                                    "lineDashEnding" : "NoConstraint",
                                    "controlPointEnding" : "NoConstraint"
                                  }
                                ],
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    255,
                                    170,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "separation" : 4
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5667"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "נטיעות בגדות נחלים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    92,
                                    230,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "separation" : 2.8346
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5668"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער טבעי לשימור",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 0.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    230,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 90,
                          "separation" : 6
                        },
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 1,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              110,
                              110,
                              110,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 0.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    230,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "separation" : 6
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5669"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "יער פארק קיים",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "capStyle" : "Round",
                          "joinStyle" : "Round",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              0,
                              0,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMHatchFill",
                          "enable" : true,
                          "lineSymbol" : {
                            "type" : "CIMLineSymbol",
                            "symbolLayers" : [
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    0,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              },
                              {
                                "type" : "CIMSolidStroke",
                                "enable" : true,
                                "colorLocked" : true,
                                "capStyle" : "Round",
                                "joinStyle" : "Round",
                                "lineStyle3D" : "Strip",
                                "miterLimit" : 10,
                                "width" : 1.5,
                                "color" : {
                                  "type" : "CIMRGBColor",
                                  "values" : [
                                    168,
                                    0,
                                    0,
                                    100
                                  ]
                                }
                              }
                            ]
                          },
                          "rotation" : 90,
                          "separation" : 2.8346
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5670"
                      ]
                    }
                  ],
                  "visible" : true
                },
                {
                  "type" : "CIMUniqueValueClass",
                  "label" : "שטח לפיתוח עירוני",
                  "patch" : "Default",
                  "symbol" : {
                    "type" : "CIMSymbolReference",
                    "symbol" : {
                      "type" : "CIMPolygonSymbol",
                      "symbolLayers" : [
                        {
                          "type" : "CIMSolidStroke",
                          "enable" : true,
                          "colorLocked" : true,
                          "capStyle" : "Butt",
                          "joinStyle" : "Miter",
                          "lineStyle3D" : "Strip",
                          "miterLimit" : 10,
                          "width" : 0.28000000000000003,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              0,
                              63,
                              255,
                              100
                            ]
                          }
                        },
                        {
                          "type" : "CIMSolidFill",
                          "enable" : true,
                          "colorLocked" : true,
                          "color" : {
                            "type" : "CIMRGBColor",
                            "values" : [
                              255,
                              255,
                              0,
                              100
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "values" : [
                    {
                      "type" : "CIMUniqueValue",
                      "fieldValues" : [
                        "5690"
                      ]
                    }
                  ],
                  "visible" : true
                }
              ]
            }
          ]
        },
        "scaleSymbols" : true,
        "snappable" : true
      }
    ],
    "binaryReferences" : [
      {
        "type" : "CIMBinaryReference",
        "uRI" : "CIMPATH=Metadata/39c03825a8c417db73d5f0b04c8b9825.xml",
        "data" : "<?xml version=\"1.0\"?>\r\n<metadata xml:lang=\"he\"><Esri><CreaDate>20180830</CreaDate><CreaTime>16422700</CreaTime><ArcGISFormat>1.0</ArcGISFormat><SyncOnce>TRUE</SyncOnce></Esri><dataIdInfo><idCitation><resTitle>יעודי קרקע</resTitle></idCitation><idAbs>640967</idAbs><idPurp></idPurp><idCredit></idCredit><resConst><Consts><useLimit></useLimit></Consts></resConst></dataIdInfo></metadata>\r\n"
      }
    ],
    "elevationSurfaces" : [
      {
        "type" : "CIMMapElevationSurface",
        "elevationMode" : "BaseGlobeSurface",
        "name" : "Ground",
        "verticalExaggeration" : 1,
        "mapElevationID" : "{78F01D53-FA67-4776-A010-20DE294C68F0}",
        "color" : {
          "type" : "CIMRGBColor",
          "values" : [
            255,
            255,
            255,
            100
          ]
        },
        "surfaceTINShadingMode" : "Smooth"
      }
    ]
  }