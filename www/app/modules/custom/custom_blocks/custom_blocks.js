/**
 * Implements hook_block_info().
 */
function custom_blocks_block_info() {
  try {
    var blocks = {};
    blocks['sos_block'] = {
      delta: 'sos_block',
      module: 'custom_blocks'
    };
    /* blocks['extra_button'] = {
      delta: 'extra_block_button',
      module: 'custom_blocks'
    }; */
    return blocks;
  }
  catch (error) { console.log('custom_blocks_block_info - ' + error); }
}

/**
 * Implements hook_block_view().
 */
function custom_blocks_block_view(delta, region) {
  try {
    var content = '';
    switch (delta) {

      // The slide menu (aka panel).
      case 'sos_block':
		content['my_button_link'] = {
		  theme: 'button_link',
		  text: 'My Button Link',
		  path: 'node/123'
		};
        break;

      // The button to open the menu.
/**       case 'extra_block_button':

        var content = {};
		content['my_controlgroup'] = {
		  theme: 'controlgroup',
		  items: [
			bl('Hello', 'node/1'),
			bl('Goodbye', 'user/logout')
		  ],
		  attributes: {
			'data-type': 'horizontal'
		  }
		};

        break; */

    }
    return content;
  }
  catch (error) { console.log('custom_blocks_block_view - ' + error); }
}