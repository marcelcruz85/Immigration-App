/**
 * Implements hook_menu().
 */
function personal_information_menu() {
  var items = {};
  items['personal'] = {
    title: 'Información Personal',
    page_callback: 'personal_information_personal_page'
  };
  return items;
}

/**
 * The page callback to display the view.
 */
function personal_information_personal_page() {
  try {
    var content = {};
	
	content['my_link_3'] = {
		theme: 'link',
		path: 'articles',
		text: 'Mensajes<br> ',
		attributes: {
			class: 'message'
		}
	};
	content['my_link_4'] = {
		theme: 'link',
		path: 'https://www.facebook.com/guardianes.delpueblo/',
		text: 'Facebook',
		options: {
			InAppBrowser:true
		},
		attributes: {
			class: 'facebook'
		}
	};
	content['my_markup'] = {
		markup: "<a href='tel:18775096422' class='phone'>Llamar</a>"
	};	
	content['my_link_1'] = {
		theme: 'link',
		path: 'direction_page',
		text: 'Dirección',
		attributes: {
			class: 'direction'
		}
	};	
	content['my_link_2'] = {
		theme: 'link',
		text: 'Preguntar',
		path: 'node/add/app_contact',
		attributes: {
			class: 'ask'
		}
	};
    content['my_personal_list'] = {
      theme: 'view',
      format: 'unformatted_list',
      path: 'personal-information', /* the path to the view in Drupal */
      row_callback: 'personal_information_personal_list_row',
      empty_callback: 'personal_information_personal_list_empty',
      attributes: {
        id: 'my_personal_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('personal_information_personal_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function personal_information_personal_list_row(view, row, variables) {
  try {
/*    var title_html = '<h3>' + "Nombre: " + row.title + '</h3>';
	  var cell_html = '<h3>' + "<span>Número de Teléfono (Celular): </span>" + row.no_cell + '</h3>';
	  var state_html = '<h3>' + "Estado: " + row.state + '</h3>';
	  var nombre_contact = '<h3>' + "Nomre: " + row.nombre_contact + '</h3>';
	  var relationship_contact = '<h3>' + "Relación: " + row.relationship_contact + '</h3>';
	  var phone_contact = '<h3>' + "Número de Teléfono: " + row.phone_contact + '</h3>';*/
	    var link_info = "node/" + row.nid + "/edit";
		var content = l('My Link', link_info, {attributes:{class:'no_personal_info'}});
		return content;

  }
  catch (error) { console.log('personal_information_personal_list_row - ' + error); }
}

/**
 *
 */
function personal_information_personal_list_empty(view, variables) {

  // This...

  //return t('Sorry, no personal were found.');

  // Or...
  var content = {};
  //content['msg'] = { markup: t('No se ha encontrado ninguna información personal, para poder ayudarlo correctamente usted debe agregar su información.') }
  content['my_button_link'] = {
	  theme: 'button_link',
	  text: 'falta',
	  path: 'node/add/personal_information',
	  attributes: {
		class: 'personal_info'		
	  }
	};
  return content;

}