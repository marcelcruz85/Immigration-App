/**
 * Implements hook_menu().
 */
function contact_information_menu() {
  var items = {};
  items['contact_information'] = {
    title: 'Mis Contactos',
    page_callback: 'contact_information_contact_page'
  };
  return items;
}

/**
 * The page callback to display the view.
 */
function contact_information_contact_page() {
  try {
    var content = {};
    content['my_contact_list'] = {
      theme: 'view',
      format: 'ul',
      path: 'contact-information', /* the path to the view in Drupal */
      row_callback: 'contact_information_contact_list_row',
      empty_callback: 'contact_information_contact_list_empty',
      attributes: {
        id: 'my_contact_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('contact_information_contact_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function contact_information_contact_list_row(view, row, variables) {
  try {
      var title_html = '<h2>' + "Nombre: </h3><p>" + row.title + '</p>';
	  var cell_html = '<h3>' + "Número de Teléfono (Celular): </h3><p>" + row.no_cell + '</p>';
      var link_html = cell_html + l(title_html, 'node/' + row.nid + "/edit" );
    
      return link_html;
    //return l(t(row.title), 'node/' + row.nid);
  }
  catch (error) { console.log('contact_information_contact_list_row - ' + error); }
}

/**
 *
 */
function contact_information_contact_list_empty(view, variables) {

  // This...

  //return t('Sorry, no contact were found.');

  // Or...

  var content = {};
  content['msg'] = { markup: t('No se ha encontrado ninguna persona para contactar en caso de emergencia, para poder ayudarlo correctamente usted debe agregar al menos una persona para contactar.') }
  content['my_button_link'] = {
	  theme: 'button_link',
	  text: 'Agregar Nuevo Contacto',
	  path: 'node/add/contact_person',
	  attributes: {
		'data-icon': 'plus'
	  }
	};
  return content;

}