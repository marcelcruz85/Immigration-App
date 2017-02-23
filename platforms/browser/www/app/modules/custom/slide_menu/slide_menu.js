/**
 * Implements hook_block_info().
 */
function slide_menu_block_info() {
  try {
    var blocks = {};
    blocks['my_panel_block'] = {
      delta: 'my_panel_block',
      module: 'slide_menu'
    };
    blocks['my_panel_block_button'] = {
      delta: 'my_panel_block_button',
      module: 'slide_menu'
    };
    return blocks;
  }
  catch (error) { console.log('slide_menu_block_info - ' + error); }
}

/**
 * Implements hook_block_view().
 */
function slide_menu_block_view(delta, region) {
  try {
    var content = '';
    switch (delta) {

      // The slide menu (aka panel).
      case 'my_panel_block':

        var attrs = {
          id: drupalgap_panel_id(delta),
          'data-role': 'panel',
          'data-position': 'left', // left or right
          'data-display': 'overlay' // overlay, reveal or push
        };
        var items = [
          bl('Infomarción Personal y de Contacto', 'personal', {
              attributes: {
                'data-icon': 'info'
              }
          }),
          bl('Terminos y Condiciones', 'node/add/terminos_condiciones', {
			  reloadPage:true,
              attributes: {
                'data-icon': 'user',
				'data-rel': 'popup'
              }
          }), 
        ];
        content += '<div ' + drupalgap_attributes(attrs) + '>' +
          '<!-- panel content goes here -->' +
          theme('jqm_item_list', { items: items }) +
        '</div><!-- /panel -->';

        break;

      // The button to open the menu.
      case 'my_panel_block_button':

        content = bl('Open panel', '#' + drupalgap_panel_id('my_panel_block'), {
            attributes: {
              'data-icon': 'bars',
              'data-iconpos': 'notext',
              'class': 'ui-btn-left ui-nodisc-icon no-shadow my_panel_block_button_icon'
            }
        });

        break;

    }
    return content;
  }
  catch (error) { console.log('slide_menu_block_view - ' + error); }
}