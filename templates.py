simple_symbol_template = '<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">\n\
        <layer pass="0" class="SimpleFill" locked="0">\n\
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="color" v="#v_color"/>\n\
          <prop k="joinstyle" v="bevel"/>\n\
          <prop k="offset" v="0,0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_color" v="#v_outline_color"/>\n\
          <prop k="outline_style" v="solid"/>\n\
          <prop k="outline_width" v="0.26"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <prop k="style" v="solid"/>\n\
        </layer>\n\
      </symbol>'
	  
simple_symbol_double_frame_template = '<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">\n\
        <layer pass="0" class="SimpleFill" locked="0">\n\
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="color" v="#v_color"/>\n\
          <prop k="joinstyle" v="bevel"/>\n\
          <prop k="offset" v="0,0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_color" v="#v_outline_color"/>\n\
          <prop k="outline_style" v="solid"/>\n\
          <prop k="outline_width" v="0.26"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <prop k="style" v="solid"/>\n\
        </layer>\n\
		<layer pass="0" class="SimpleLine" locked="0">\n\
          <prop k="capstyle" v="square"/>\n\
          <prop k="customdash" v="5;2"/>\n\
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="customdash_unit" v="MM"/>\n\
          <prop k="draw_inside_polygon" v="0"/>\n\
          <prop k="joinstyle" v="miter"/>\n\
          <prop k="line_color" v="#v_frame_color"/>\n\
          <prop k="line_style" v="solid"/>\n\
          <prop k="line_width" v="1"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0.704"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="use_custom_dash" v="0"/>\n\
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
        </layer>\n\
      </symbol>'	  

line_pattern_w_simple_symbol = '<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">\n\
        <layer pass="0" class="SimpleFill" locked="0">\n\
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="color" v="#v_color"/>\n\
          <prop k="joinstyle" v="bevel"/>\n\
          <prop k="offset" v="0,0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_color" v="#v_outline_color"/>\n\
          <prop k="outline_style" v="solid"/>\n\
          <prop k="outline_width" v="0.26"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <prop k="style" v="solid"/>\n\
        </layer>\n\
        <layer pass="0" class="LinePatternFill" locked="0">\n\
          <prop k="angle" v="#angle"/>\n\
          <prop k="color" v="#v_line_pattern_color"/>\n\
          <prop k="distance" v="#v_distance"/>\n\
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="distance_unit" v="MM"/>\n\
          <prop k="line_width" v="0.26"/>\n\
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <symbol alpha="1" clip_to_extent="1" type="line" name="@0@1">\n\
            <layer pass="0" class="SimpleLine" locked="0">\n\
              <prop k="capstyle" v="square"/>\n\
              <prop k="customdash" v="5;2"/>\n\
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="customdash_unit" v="MM"/>\n\
              <prop k="draw_inside_polygon" v="0"/>\n\
              <prop k="joinstyle" v="bevel"/>\n\
              <prop k="line_color" v="#line_color"/>\n\
              <prop k="line_style" v="solid"/>\n\
              <prop k="line_width" v="#width"/>\n\
              <prop k="line_width_unit" v="MM"/>\n\
              <prop k="offset" v="0"/>\n\
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="offset_unit" v="MM"/>\n\
              <prop k="use_custom_dash" v="0"/>\n\
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
            </layer>\n\
          </symbol>\n\
        </layer>\n\
      </symbol>'	  
line_pattern_w_frame = '<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">\n\
        <layer pass="0" class="SimpleFill" locked="0">\n\
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="color" v="#v_color"/>\n\
          <prop k="joinstyle" v="bevel"/>\n\
          <prop k="offset" v="0,0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_color" v="#v_outline_color"/>\n\
          <prop k="outline_style" v="solid"/>\n\
          <prop k="outline_width" v="0.26"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <prop k="style" v="solid"/>\n\
        </layer>\n\
        <layer pass="0" class="LinePatternFill" locked="0">\n\
          <prop k="angle" v="#angle"/>\n\
          <prop k="color" v="#v_line_pattern_color"/>\n\
          <prop k="distance" v="#v_distance"/>\n\
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="distance_unit" v="MM"/>\n\
          <prop k="line_width" v="0.26"/>\n\
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <symbol alpha="1" clip_to_extent="1" type="line" name="@0@1">\n\
            <layer pass="0" class="SimpleLine" locked="0">\n\
              <prop k="capstyle" v="square"/>\n\
              <prop k="customdash" v="5;2"/>\n\
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="customdash_unit" v="MM"/>\n\
              <prop k="draw_inside_polygon" v="0"/>\n\
              <prop k="joinstyle" v="bevel"/>\n\
              <prop k="line_color" v="#line_color"/>\n\
              <prop k="line_style" v="solid"/>\n\
              <prop k="line_width" v="#width"/>\n\
              <prop k="line_width_unit" v="MM"/>\n\
              <prop k="offset" v="0"/>\n\
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="offset_unit" v="MM"/>\n\
              <prop k="use_custom_dash" v="0"/>\n\
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
            </layer>\n\
          </symbol>\n\
        </layer>\n\
		<layer pass="0" class="SimpleLine" locked="0">\n\
          <prop k="capstyle" v="square"/>\n\
          <prop k="customdash" v="5;2"/>\n\
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="customdash_unit" v="MM"/>\n\
          <prop k="draw_inside_polygon" v="0"/>\n\
          <prop k="joinstyle" v="miter"/>\n\
          <prop k="line_color" v="#v_outline_wide"/>\n\
          <prop k="line_style" v="solid"/>\n\
          <prop k="line_width" v="1"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0.704"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="use_custom_dash" v="0"/>\n\
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
        </layer>\n\
        <layer pass="0" class="SimpleLine" locked="0">\n\
          <prop k="capstyle" v="square"/>\n\
          <prop k="customdash" v="5;2"/>\n\
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="customdash_unit" v="MM"/>\n\
          <prop k="draw_inside_polygon" v="0"/>\n\
          <prop k="joinstyle" v="miter"/>\n\
          <prop k="line_color" v="#v_outline_base"/>\n\
          <prop k="line_style" v="solid"/>\n\
          <prop k="line_width" v="0.352"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="use_custom_dash" v="0"/>\n\
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
        </layer>\n\
      </symbol>'	  
	  
double_line_pattern = '<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">\n\
        <layer pass="0" class="SimpleFill" locked="0">\n\
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="color" v="#v_color"/>\n\
          <prop k="joinstyle" v="bevel"/>\n\
          <prop k="offset" v="0,0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_color" v="#v_outline_color"/>\n\
          <prop k="outline_style" v="solid"/>\n\
          <prop k="outline_width" v="0.26"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <prop k="style" v="solid"/>\n\
        </layer>\n\
        <layer pass="0" class="LinePatternFill" locked="0">\n\
          <prop k="angle" v="#angle"/>\n\
          <prop k="color" v="#v_line_pattern_color"/>\n\
          <prop k="distance" v="#v_distance"/>\n\
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="distance_unit" v="MM"/>\n\
          <prop k="line_width" v="0.26"/>\n\
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@1">\n\
            <layer pass="0" class="SimpleLine" locked="0">\n\
              <prop k="capstyle" v="square"/>\n\
              <prop k="customdash" v="5;2"/>\n\
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="customdash_unit" v="MM"/>\n\
              <prop k="draw_inside_polygon" v="0"/>\n\
              <prop k="joinstyle" v="bevel"/>\n\
              <prop k="line_color" v="#line_color"/>\n\
              <prop k="line_style" v="solid"/>\n\
              <prop k="line_width" v="#width"/>\n\
              <prop k="line_width_unit" v="MM"/>\n\
              <prop k="offset" v="0"/>\n\
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="offset_unit" v="MM"/>\n\
              <prop k="use_custom_dash" v="0"/>\n\
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
            </layer>\n\
          </symbol>\n\
        </layer>\n\
        <layer pass="0" class="LinePatternFill" locked="0">\n\
          <prop k="angle" v="#angle1"/>\n\
          <prop k="color" v="#v_line_pattern_color1"/>\n\
          <prop k="distance" v="#v_distance"/>\n\
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="distance_unit" v="MM"/>\n\
          <prop k="line_width" v="0"/>\n\
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@2">\n\
            <layer pass="0" class="SimpleLine" locked="0">\n\
              <prop k="capstyle" v="square"/>\n\
              <prop k="customdash" v="5;2"/>\n\
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="customdash_unit" v="MM"/>\n\
              <prop k="draw_inside_polygon" v="0"/>\n\
              <prop k="joinstyle" v="bevel"/>\n\
              <prop k="line_color" v="#line_color1"/>\n\
              <prop k="line_style" v="solid"/>\n\
              <prop k="line_width" v="#width"/>\n\
              <prop k="line_width_unit" v="MM"/>\n\
              <prop k="offset" v="#v_offset"/>\n\
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="offset_unit" v="MM"/>\n\
              <prop k="use_custom_dash" v="0"/>\n\
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
            </layer>\n\
          </symbol>\n\
        </layer>\n\
      </symbol>'	
	  
double_frame_mixed = '<symbol alpha="1" clip_to_extent="1" type="fill" name="#name">\n\
        <layer pass="0" class="SimpleFill" locked="0">\n\
          <prop k="border_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="color" v="#v_color"/>\n\
          <prop k="joinstyle" v="bevel"/>\n\
          <prop k="offset" v="0,0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_color" v="#v_outline_color"/>\n\
          <prop k="outline_style" v="solid"/>\n\
          <prop k="outline_width" v="0.26"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <prop k="style" v="solid"/>\n\
        </layer>\n\
        <layer pass="0" class="LinePatternFill" locked="0">\n\
          <prop k="angle" v="#angle"/>\n\
          <prop k="color" v="#v_line_pattern_color"/>\n\
          <prop k="distance" v="#v_distance"/>\n\
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="distance_unit" v="MM"/>\n\
          <prop k="line_width" v="0.26"/>\n\
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@1">\n\
            <layer pass="0" class="SimpleLine" locked="0">\n\
              <prop k="capstyle" v="square"/>\n\
              <prop k="customdash" v="5;2"/>\n\
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="customdash_unit" v="MM"/>\n\
              <prop k="draw_inside_polygon" v="0"/>\n\
              <prop k="joinstyle" v="bevel"/>\n\
              <prop k="line_color" v="#line_color"/>\n\
              <prop k="line_style" v="solid"/>\n\
              <prop k="line_width" v="#width"/>\n\
              <prop k="line_width_unit" v="MM"/>\n\
              <prop k="offset" v="0"/>\n\
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="offset_unit" v="MM"/>\n\
              <prop k="use_custom_dash" v="0"/>\n\
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
            </layer>\n\
          </symbol>\n\
        </layer>\n\
        <layer pass="0" class="LinePatternFill" locked="0">\n\
          <prop k="angle" v="#angle1"/>\n\
          <prop k="color" v="#v_line_pattern_color1"/>\n\
          <prop k="distance" v="#v_distance"/>\n\
          <prop k="distance_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="distance_unit" v="MM"/>\n\
          <prop k="line_width" v="0"/>\n\
          <prop k="line_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="outline_width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="outline_width_unit" v="MM"/>\n\
          <symbol alpha="1" clip_to_extent="1" type="line" name="@1@2">\n\
            <layer pass="0" class="SimpleLine" locked="0">\n\
              <prop k="capstyle" v="square"/>\n\
              <prop k="customdash" v="5;2"/>\n\
              <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="customdash_unit" v="MM"/>\n\
              <prop k="draw_inside_polygon" v="0"/>\n\
              <prop k="joinstyle" v="bevel"/>\n\
              <prop k="line_color" v="#line_color1"/>\n\
              <prop k="line_style" v="solid"/>\n\
              <prop k="line_width" v="#width"/>\n\
              <prop k="line_width_unit" v="MM"/>\n\
              <prop k="offset" v="#v_offset"/>\n\
              <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
              <prop k="offset_unit" v="MM"/>\n\
              <prop k="use_custom_dash" v="0"/>\n\
              <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
            </layer>\n\
          </symbol>\n\
        </layer>\n\
        <layer pass="0" class="SimpleLine" locked="0">\n\
          <prop k="capstyle" v="square"/>\n\
          <prop k="customdash" v="5;2"/>\n\
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="customdash_unit" v="MM"/>\n\
          <prop k="draw_inside_polygon" v="0"/>\n\
          <prop k="joinstyle" v="miter"/>\n\
          <prop k="line_color" v="#v_outline_wide"/>\n\
          <prop k="line_style" v="solid"/>\n\
          <prop k="line_width" v="1"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0.704"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="use_custom_dash" v="0"/>\n\
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
        </layer>\n\
        <layer pass="0" class="SimpleLine" locked="0">\n\
          <prop k="capstyle" v="square"/>\n\
          <prop k="customdash" v="5;2"/>\n\
          <prop k="customdash_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="customdash_unit" v="MM"/>\n\
          <prop k="draw_inside_polygon" v="0"/>\n\
          <prop k="joinstyle" v="miter"/>\n\
          <prop k="line_color" v="#v_outline_base"/>\n\
          <prop k="line_style" v="solid"/>\n\
          <prop k="line_width" v="0.352"/>\n\
          <prop k="line_width_unit" v="MM"/>\n\
          <prop k="offset" v="0"/>\n\
          <prop k="offset_map_unit_scale" v="0,0,0,0,0,0"/>\n\
          <prop k="offset_unit" v="MM"/>\n\
          <prop k="use_custom_dash" v="0"/>\n\
          <prop k="width_map_unit_scale" v="0,0,0,0,0,0"/>\n\
        </layer>\n\
      </symbol>'