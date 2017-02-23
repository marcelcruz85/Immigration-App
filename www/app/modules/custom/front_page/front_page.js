/**
 * Implements hook_menu().
 */
function front_page_menu() {
  try {
    var items = {};
    items['front_page'] = {
      title: 'Mi Abogado',
      page_callback: 'front_page_hello_world_page'
    };
    return items;
  }
  catch (error) { console.log('front_page_menu - ' + error); }
}


/*
* Render the page
*/

function front_page_hello_world_page() {
  try {
	var content = {};
	content['msg'] = { markup: t('<p class="help">Gracias por confiar en CLG Los Guardianes del Pueblo nuestra aplicación tiene como objetivo contactar a la persona que usted tenga como persona de referencia en caso de que usted quede detenido</p>') }

	content['my_link_term'] = {
   		theme: 'link',
   		path: 'terminos_condiciones',
   		text: 'Ver Terminos y Condiciones',
   		attributes: {
   			class: 'terminos front_icon front_link'
   		}
   	};
	content['my_link_3'] = {
		theme: 'link',
		path: 'article_images',
		text: 'CLG Alertas',
		attributes: {
			class: 'message row2 front_icon'
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
			class: 'facebook row2 front_icon'
		}
	};
	content['my_markup'] = {
		markup: "<a href='tel:18775096422' class='phone row1 front_icon'>Llamar</a>"
	};	
	content['my_link_1'] = {
		theme: 'link',
		path: 'direction_page',
		text: 'Dirección',
		attributes: {
			class: 'direction row1 front_icon'
		}
	};	
	content['my_link_2'] = {
		theme: 'link',
		text: 'Preguntar',
		path: 'node/add/app_contact',
		attributes: {
			class: 'ask row1 front_icon'
		}
	};
    content['my_personal_list'] = {
      theme: 'view',
      format: 'unformatted_list',
      path: 'personal-information', /* the path to the view in Drupal */
      row_callback: 'front_page_personal_list_row',
      empty_callback: 'front_page_personal_list_empty',
      attributes: {
        id: 'my_personal_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('front_page_personal_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function front_page_personal_list_row(view, row, variables) {
  try {


/*    var title_html = '<h3>' + "Nombre: " + row.title + '</h3>';
	  var cell_html = '<h3>' + "<span>Número de Teléfono (Celular): </span>" + row.no_cell + '</h3>';
	  var state_html = '<h3>' + "Estado: " + row.state + '</h3>';
	  var nombre_contact = '<h3>' + "Nomre: " + row.nombre_contact + '</h3>';
	  var relationship_contact = '<h3>' + "Relación: " + row.relationship_contact + '</h3>';
	  var phone_contact = '<h3>' + "Número de Teléfono: " + row.phone_contact + '</h3>';*/
	    var link_info = "node/" + row.nid + "/edit";
		var profile = l('Mi Perfil', link_info, {attributes:{class:'personal_info front_icon row2'}});
		var sos = bl('¡Estoy Detenido!<br>Presione aqui', 'node/add/sos', {attributes:{class:'sos_active'}});
		return profile + sos;

  }
  catch (error) { console.log('front_page_personal_list_row - ' + error); }
}

/**
 *
 */
function front_page_personal_list_empty(view, variables) {

  // This...

  //return t('Sorry, no personal were found.');

  // Or...
  drupalgap_alert('Su Perfil esta incompleto para utilizar la función "¡Estoy Detenido!" debe completar la informacion de su perfil.', {
		title: drupalgap.settings.title,
		buttonName: 'OK'
	  });
  var content = {};
	  content['my_button_link'] = {
		  theme: 'link',
		  text: 'Mi Perfil',
		  path: 'node/add/personal_information',
		  attributes: {
			class: 'no_personal_info row2 front_icon'		
		  }
		};
		content['my_button_link_sos'] = {
		  theme: 'button_link',
		  text: '¡Estoy Detenido!<br>Complete su Perfil para habilitar esta función',
		  path: '#',
		  attributes: {
			class: 'sos'		
		  }
		};
		
  return content;
}

/**
 * Implements hook_post_process_page().
 * Take action after the page is processed and shown to the user.
 * @param {Object} variables The page variables.
 */

 /*
function front_page_post_process_page() {
  try {
      var account = Drupal.user;
      if (account.uid == 0) {
        location.reload();
      }
  }
  catch (error) {
    alert('front_page_post_process_page - ' + error);
  }
}

*/