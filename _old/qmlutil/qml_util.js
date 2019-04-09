// Templates
let qml_header = `<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="2.18.19" simplifyAlgorithm="0" minimumScale="0" maximumScale="1e+08" simplifyDrawingHints="1" minLabelScale="0" maxLabelScale="1e+08" simplifyDrawingTol="1" readOnly="0" simplifyMaxScale="1" hasScaleBasedVisibilityFlag="0" simplifyLocal="1" scaleBasedLabelVisibilityFlag="0">
  <renderer-v2 attr="__class_field__" forceraster="0" symbollevels="0" type="categorizedSymbol" enableorderby="0">`
let qml_suffix = `</renderer-v2><layerGeometryType>2</layerGeometryType>
</qgis>`


let simple_symbol_template = `<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">
        <layer pass="0" class="SimpleFill" locked="0">
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="color" v="#v_color"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="#v_outline_color"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
        </layer>
      </symbol>`
	  
let simple_symbol_double_frame_template = `<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">
        <layer pass="0" class="SimpleFill" locked="0">
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="color" v="#v_color"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="#v_outline_color"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
        </layer>
		<layer pass="0" class="SimpleLine" locked="0">
          <prop k="capstyle" v="square"/>
          <prop k="customdash" v="5;2"/>
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="customdash_unit" v="MM"/>
          <prop k="draw_inside_polygon" v="0"/>
          <prop k="joinstyle" v="miter"/>
          <prop k="line_color" v="#v_frame_color"/>
          <prop k="line_style" v="solid"/>
          <prop k="line_width" v="1"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0.704"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="use_custom_dash" v="0"/>
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
        </layer>
      </symbol>`	  

let line_pattern_w_simple_symbol = `<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">
        <layer pass="0" class="SimpleFill" locked="0">
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="color" v="#v_color"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="#v_outline_color"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
        </layer>
        <layer pass="0" class="LinePatternFill" locked="0">
          <prop k="angle" v="#angle"/>
          <prop k="color" v="#v_line_pattern_color"/>
          <prop k="distance" v="#v_distance"/>
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="distance_unit" v="MM"/>
          <prop k="line_width" v="0.26"/>
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="outline_width_unit" v="MM"/>
          <symbol alpha="1" clip_to_extent="1" type="line" name="@0@1">
            <layer pass="0" class="SimpleLine" locked="0">
              <prop k="capstyle" v="square"/>
              <prop k="customdash" v="5;2"/>
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="customdash_unit" v="MM"/>
              <prop k="draw_inside_polygon" v="0"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="line_color" v="#line_color"/>
              <prop k="line_style" v="solid"/>
              <prop k="line_width" v="#width"/>
              <prop k="line_width_unit" v="MM"/>
              <prop k="offset" v="0"/>
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="use_custom_dash" v="0"/>
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
            </layer>
          </symbol>
        </layer>
      </symbol>`	  
let line_pattern_w_frame = `<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">
        <layer pass="0" class="SimpleFill" locked="0">
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="color" v="#v_color"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="#v_outline_color"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
        </layer>
        <layer pass="0" class="LinePatternFill" locked="0">
          <prop k="angle" v="#angle"/>
          <prop k="color" v="#v_line_pattern_color"/>
          <prop k="distance" v="#v_distance"/>
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="distance_unit" v="MM"/>
          <prop k="line_width" v="0.26"/>
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="outline_width_unit" v="MM"/>
          <symbol alpha="1" clip_to_extent="1" type="line" name="@0@1">
            <layer pass="0" class="SimpleLine" locked="0">
              <prop k="capstyle" v="square"/>
              <prop k="customdash" v="5;2"/>
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="customdash_unit" v="MM"/>
              <prop k="draw_inside_polygon" v="0"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="line_color" v="#line_color"/>
              <prop k="line_style" v="solid"/>
              <prop k="line_width" v="#width"/>
              <prop k="line_width_unit" v="MM"/>
              <prop k="offset" v="0"/>
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="use_custom_dash" v="0"/>
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
            </layer>
          </symbol>
        </layer>
		<layer pass="0" class="SimpleLine" locked="0">
          <prop k="capstyle" v="square"/>
          <prop k="customdash" v="5;2"/>
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="customdash_unit" v="MM"/>
          <prop k="draw_inside_polygon" v="0"/>
          <prop k="joinstyle" v="miter"/>
          <prop k="line_color" v="#v_outline_wide"/>
          <prop k="line_style" v="solid"/>
          <prop k="line_width" v="1"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0.704"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="use_custom_dash" v="0"/>
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
        </layer>
        <layer pass="0" class="SimpleLine" locked="0">
          <prop k="capstyle" v="square"/>
          <prop k="customdash" v="5;2"/>
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="customdash_unit" v="MM"/>
          <prop k="draw_inside_polygon" v="0"/>
          <prop k="joinstyle" v="miter"/>
          <prop k="line_color" v="#v_outline_base"/>
          <prop k="line_style" v="solid"/>
          <prop k="line_width" v="0.352"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="use_custom_dash" v="0"/>
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
        </layer>
      </symbol>`	  
	  
let double_line_pattern = `<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">
        <layer pass="0" class="SimpleFill" locked="0">
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="color" v="#v_color"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="#v_outline_color"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
        </layer>
        <layer pass="0" class="LinePatternFill" locked="0">
          <prop k="angle" v="#angle"/>
          <prop k="color" v="#v_line_pattern_color"/>
          <prop k="distance" v="#v_distance"/>
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="distance_unit" v="MM"/>
          <prop k="line_width" v="0.26"/>
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="outline_width_unit" v="MM"/>
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@1">
            <layer pass="0" class="SimpleLine" locked="0">
              <prop k="capstyle" v="square"/>
              <prop k="customdash" v="5;2"/>
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="customdash_unit" v="MM"/>
              <prop k="draw_inside_polygon" v="0"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="line_color" v="#line_color"/>
              <prop k="line_style" v="solid"/>
              <prop k="line_width" v="#width"/>
              <prop k="line_width_unit" v="MM"/>
              <prop k="offset" v="0"/>
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="use_custom_dash" v="0"/>
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
            </layer>
          </symbol>
        </layer>
        <layer pass="0" class="LinePatternFill" locked="0">
          <prop k="angle" v="#angle1"/>
          <prop k="color" v="#v_line_pattern_color1"/>
          <prop k="distance" v="#v_distance"/>
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="distance_unit" v="MM"/>
          <prop k="line_width" v="0"/>
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="outline_width_unit" v="MM"/>
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@2">
            <layer pass="0" class="SimpleLine" locked="0">
              <prop k="capstyle" v="square"/>
              <prop k="customdash" v="5;2"/>
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="customdash_unit" v="MM"/>
              <prop k="draw_inside_polygon" v="0"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="line_color" v="#line_color1"/>
              <prop k="line_style" v="solid"/>
              <prop k="line_width" v="#width"/>
              <prop k="line_width_unit" v="MM"/>
              <prop k="offset" v="#v_offset"/>
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="use_custom_dash" v="0"/>
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
            </layer>
          </symbol>
        </layer>
      </symbol>`	
	  
let double_frame_mixed = `<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">
        <layer pass="0" class="SimpleFill" locked="0">
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="color" v="#v_color"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="#v_outline_color"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
        </layer>
        <layer pass="0" class="LinePatternFill" locked="0">
          <prop k="angle" v="#angle"/>
          <prop k="color" v="#v_line_pattern_color"/>
          <prop k="distance" v="#v_distance"/>
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="distance_unit" v="MM"/>
          <prop k="line_width" v="0.26"/>
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="outline_width_unit" v="MM"/>
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@1">
            <layer pass="0" class="SimpleLine" locked="0">
              <prop k="capstyle" v="square"/>
              <prop k="customdash" v="5;2"/>
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="customdash_unit" v="MM"/>
              <prop k="draw_inside_polygon" v="0"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="line_color" v="#line_color"/>
              <prop k="line_style" v="solid"/>
              <prop k="line_width" v="#width"/>
              <prop k="line_width_unit" v="MM"/>
              <prop k="offset" v="0"/>
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="use_custom_dash" v="0"/>
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
            </layer>
          </symbol>
        </layer>
        <layer pass="0" class="LinePatternFill" locked="0">
          <prop k="angle" v="#angle1"/>
          <prop k="color" v="#v_line_pattern_color1"/>
          <prop k="distance" v="#v_distance"/>
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="distance_unit" v="MM"/>
          <prop k="line_width" v="0"/>
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="outline_width_unit" v="MM"/>
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@2">
            <layer pass="0" class="SimpleLine" locked="0">
              <prop k="capstyle" v="square"/>
              <prop k="customdash" v="5;2"/>
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="customdash_unit" v="MM"/>
              <prop k="draw_inside_polygon" v="0"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="line_color" v="#line_color1"/>
              <prop k="line_style" v="solid"/>
              <prop k="line_width" v="#width"/>
              <prop k="line_width_unit" v="MM"/>
              <prop k="offset" v="#v_offset"/>
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="use_custom_dash" v="0"/>
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
            </layer>
          </symbol>
        </layer>
        <layer pass="0" class="SimpleLine" locked="0">
          <prop k="capstyle" v="square"/>
          <prop k="customdash" v="5;2"/>
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="customdash_unit" v="MM"/>
          <prop k="draw_inside_polygon" v="0"/>
          <prop k="joinstyle" v="miter"/>
          <prop k="line_color" v="#v_outline_wide"/>
          <prop k="line_style" v="solid"/>
          <prop k="line_width" v="1"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0.704"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="use_custom_dash" v="0"/>
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
        </layer>
        <layer pass="0" class="SimpleLine" locked="0">
          <prop k="capstyle" v="square"/>
          <prop k="customdash" v="5;2"/>
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="customdash_unit" v="MM"/>
          <prop k="draw_inside_polygon" v="0"/>
          <prop k="joinstyle" v="miter"/>
          <prop k="line_color" v="#v_outline_base"/>
          <prop k="line_style" v="solid"/>
          <prop k="line_width" v="0.352"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="use_custom_dash" v="0"/>
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>
        </layer>
      </symbol>`		
		

let category_template = `<category render="true" symbol="#symbol_name" value="#value_label" label="#text_label"/>
`	  
let point2mm =  0.352778

// Main 
document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("mavat").addEventListener("click", createQML);
//document.getElementById("mavat").addEventListener("click", qmlFromLyrx);
});

function qmlFromLyrx() {	
	let reader = new FileReader();
	 reader.onload = (function(theFile) {
		 return function(e) {			 						
			 lyrx_obj = JSON.parse(e.target.result)			 
			 let file = document.getElementById('myFile'); 	
			 let fn = file.files.item(0).name 
			 createQML(undefined, lyrx_obj, fn)
		 };
	})($("#myFile")[0].files[0]); // Bind to the element.
	reader.readAsText($("#myFile")[0].files[0]);

}
function createQML(event, lyrx_obj = null, fn = null) {
	let layerDefinition = lyrx_obj || layerDef	
	console.log(layerDefinition)
	//console.log(layerDef.layerDefinitions[0].renderer.groups[0].classes)
	let categories = `<categories>`
	let symbols = "<symbols>"
	let symbol_types = []	
	let widthArray = []
	let defArray = []
	let outElem = document.getElementById("out2")
	let fieldName = layerDefinition.layerDefinitions[0].renderer.fields[0]
	layerDefinition.layerDefinitions[0].renderer.groups[0].classes.forEach(function(rend, idx) {
		let name = rend.label
		let code = rend.values[0].fieldValues[0]
		let rendNum = rend.symbol.symbol.symbolLayers.length
		
		//outElem.innerHTML += name + ","
		
		let symbols_temp = {}
		let symbols_array = []
		
		let symbol_object = {}
		rend.symbol.symbol.symbolLayers.forEach(function(unique,id){			
			let symbol = unique
			if (symbol_types.indexOf(symbol.type) < 0)
				symbol_types.push(symbol.type)
			
			if(!symbols_temp[symbol.type])
				symbols_temp[symbol.type] = 1
			else
				symbols_temp[symbol.type] += 1
			
			symbols_array.push(symbol)
	
			let color = ''			
			// Create a color string without opacity part
			if (symbol.color ) {
				let temp_color = symbol.color.values
                color = temp_color[0] + "," + temp_color[1] + "," + temp_color[2]				
				// Convert CMYK to RGB
				if (symbol.color.type === 'CIMCMYKColor') {					
					let cmyk_array = symbol.color.values
					//console.log(cmyk_array)
					color = cmyk2Rgb(cmyk_array)					
				}
				if (symbol.color.type === 'CIMHSVColor') {
					let hsv_array = symbol.color.values					
					color = HSVtoRGB(hsv_array[0],hsv_array[1]/100,hsv_array[2]/100)	
					console.log("hsv")					
					console.log(color)					
				}
			}
			
			// Convert lineSymbol color
			if(symbol.lineSymbol && symbol.lineSymbol.symbolLayers) {
				let temp_color = symbol.lineSymbol.symbolLayers[0].color.values				
				color = temp_color[0] + "," + temp_color[1] + "," + temp_color[2]
				if (symbol.lineSymbol.symbolLayers[0].color.type === 'CIMCMYKColor') {
					let cmyk_array = symbol.lineSymbol.symbolLayers[0].color.values
					color = cmyk2Rgb(cmyk_array)					
				}
				
			}
			
			let curr_symbol
			if (symbol.type === 'CIMSolidFill') {
				symbol_object['fill'] = color				
			} else if (!symbol_object['hatch1'] && symbol.type === 'CIMHatchFill') {
				symbol_object['hatch1'] = {color: color, angle: symbol.rotation, sep: symbol.separation*point2mm, width: symbol.lineSymbol.symbolLayers[0].width*point2mm}
				if (widthArray.indexOf(symbol.lineSymbol.symbolLayers[0].width) < 0) {
					widthArray.push(symbol.lineSymbol.symbolLayers[0].width)					
				}
				
			} else if (symbol_object['hatch1'] && symbol.type === 'CIMHatchFill') {
				symbol_object['hatch2'] = {color: color, angle: symbol.rotation, sep: symbol.separation*point2mm, width: symbol.lineSymbol.symbolLayers[0].width*point2mm}
				if (widthArray.indexOf(symbol.lineSymbol.symbolLayers[0].width) < 0) {
					widthArray.push(symbol.lineSymbol.symbolLayers[0].width)					
				}
			} else if (symbol.type === 'CIMSolidStroke' && !symbol_object['outline']) {
				symbol_object['outline'] = {color: color, width: symbol.width}
			} else if (symbol.type === 'CIMSolidStroke' && symbol_object['outline']) { 
				if (color != symbol_object['outline'] && color != '0,63,255' && symbol.width != 1 && symbol.width > 1) {					
					symbol_object['outline2'] = {color: color, width: symbol.width}
					//console.log("second frame")
				}
			}


			
		})
				
		defArray.push({name: name, code: code, rendNum: rendNum, symb_types: symbols_temp, symbArr: symbols_array, symbDef: symbol_object})
		
		let qmlSymbol = ''
		if (!symbol_object['fill']) {
			console.log("no solid")
			symbol_object['fill'] = "255,255,255"
		}
		if (symbol_object['hatch2']) { // double pattern
			if (!symbol_object['outline2'])
				qmlSymbol = double_line_pattern.replace("#name", idx).replace("#v_color", symbol_object['fill']).replace("#v_outline_color", symbol_object['outline'].color)
			else
				qmlSymbol = double_frame_mixed.replace("#name", idx).replace("#v_color", symbol_object['fill']).replace("#v_outline_color", symbol_object['outline'].color)
					.replace("#v_outline_wide", symbol_object['outline2'].color).replace("#v_outline_base", symbol_object['outline'].color)
		
			qmlSymbol = qmlSymbol.replace("#angle",symbol_object['hatch1'].angle).replace("#v_line_pattern_color", symbol_object['hatch1'].color).replace("#line_color", symbol_object['hatch1'].color)	
			qmlSymbol = qmlSymbol.replace("#angle1",symbol_object['hatch2'].angle).replace("#v_line_pattern_color1", symbol_object['fill']).replace("#line_color1", symbol_object['hatch2'].color)			
			// Change width of lines
			//let width = symbol_object['hatch1'].width < 2 ? 0.4 : 1
			//qmlSymbol = qmlSymbol.replaceAll('#width', width)
			qmlSymbol = qmlSymbol.replaceAll('#width', symbol_object['hatch2'].width)
			qmlSymbol = qmlSymbol.replaceAll('#v_distance', symbol_object['hatch2'].sep)
			qmlSymbol = qmlSymbol.replaceAll('#v_offset', symbol_object['hatch2'].width)
			
		} else if (symbol_object['hatch1']) { // single pattern
			if (!symbol_object['outline2']) {
				qmlSymbol = line_pattern_w_simple_symbol.replace("#name", idx).replace("#v_color", symbol_object['fill']).replace("#v_outline_color", symbol_object['outline'].color)
			} else {
				qmlSymbol = line_pattern_w_frame.replace("#name", idx).replace("#v_color", symbol_object['fill']).replace("#v_outline_color", symbol_object['outline'].color)
					.replace("#v_outline_wide", symbol_object['outline2'].color).replace("#v_outline_base", symbol_object['outline'].color)
			}
			
			qmlSymbol = qmlSymbol.replace("#angle",symbol_object['hatch1'].angle).replace("#v_line_pattern_color", symbol_object['fill']).replace("#line_color", symbol_object['hatch1'].color)	
			// Change width of lines
			//let width = symbol_object['hatch1'].width < 2 ? 0.4 : 1
			qmlSymbol = qmlSymbol.replaceAll('#width', symbol_object['hatch1'].width)
			qmlSymbol = qmlSymbol.replaceAll('#v_distance', symbol_object['hatch1'].sep)
		} else if(symbols_array.length > 1) { // simple fill
			if (!symbol_object['outline2'])
				qmlSymbol = simple_symbol_template.replace("#name", idx).replace("#v_color", symbol_object['fill']).replace("#v_outline_color", symbol_object['outline'].color)			
			else 
				qmlSymbol = simple_symbol_double_frame_template.replace("#name", idx).replace("#v_color", symbol_object['fill']).replace("#v_outline_color", symbol_object['outline'].color)
					.replace("#v_frame_color", symbol_object['outline2'].color)		
		} else (
			qmlSymbol = simple_symbol_template.replace("#name", idx).replace("#v_color", '255,255,255').replace("#v_outline_color", symbol_object['outline'].color)			
		)
		
		symbols += qmlSymbol
		
		let strippedLabels = name.replaceAll(`"`, ``)
		let curr_category = category_template.replace("#symbol_name", idx).replace("#value_label", code).replace("#text_label", strippedLabels)
		categories += curr_category
	
	})
	
	categories += "</categories>"
	symbols += "</symbols>"	
	console.log(symbol_types)
		
	// This is the important bit: copy from console
	//console.log(qml_header + categories + symbols + qml_suffix)
		
	//document.getElementById("out1").innerHTML = qml_header + categories + symbols + qml_suffix
	//console.log(defArray)
	//console.log(widthArray)
	// Download qml file
	
	let header = qml_header.replace("__class_field__", fieldName)
	let file_name = fn ? fn + ".qml" : "mavat.qml"
	download(file_name, header + categories + symbols + qml_suffix)
}

function cmyk2Rgb(cmyk_array) {	
	let c = cmyk_array[0]
	let m  = cmyk_array[1]
	let y  = cmyk_array[2]
	let k  = cmyk_array[3]	
	
	let r = parseInt((1 - ((c + k)/100)) * 255)
	let g = parseInt((1 - ((m + k)/100)) * 255)
	let b = parseInt((1 - ((y + k)/100)) * 255)
	
	color = [r, g, b,].join(",")	
	return color
}

function mix(a, b, v)
{
    return (1-v)*a + v*b;
}

function HSVtoRGB(H, S, V)
{
    var V2 = V * (1 - S);
    var r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? mix(V2,V,(H-240)/60) : 0)));
    var g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? mix(V2,V,H/60) : ((H>=180 && H<=240) ? mix(V,V2,(H-180)/60) : 0)));
    var b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? mix(V,V2,(H-300)/60) : 0)));
	return [Math.round(r * 255), Math.round(g* 255 ), Math.round(b * 255)].join(",")
    
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

String.prototype.replaceAll = function(str1, str2, ignore)
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}
