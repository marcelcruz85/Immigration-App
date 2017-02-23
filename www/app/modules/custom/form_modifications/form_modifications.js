/**
 * Implements hook_form_alter().
 * This hook is used to make alterations to existing forms.
 */

function form_modifications_form_alter(form, form_state, form_id) {
  try {

    //alert(form_id); // Use to see the form id.
    //alert(form.bundle);    // Use to inspect the form.
	if (form_id == 'node_edit' && form.bundle == 'personal_information') {
		form.elements.title.title = 'Nombre';
		form.prefix += '<p>Por favor escriba a continuación algunos datos personales necesarios para poder ayudarlo correctamente en caso de que usted quede detenido</p>';
		form.elements.submit.value = 'Guardar';
		form.submit.push('alert_info_saved');
		form.action = 'front_page';
	}

    if (form_id == 'node_edit' && form.bundle == 'sos') {
    
      // Change the label for the name,
      form.elements.title.title = 'Fecha';
	  
	  //Add today Date to a Title field(Fecha)
	  var fecha = new Date();
	  form.elements['title'].value = fecha;
      
      // the theme of the button on the login form.
      form.elements.submit.options.attributes['data-theme'] = 'a';
	  
	  form.suffix += '<p>Al hacer clic en el siguiente botón usted nos enviará un aviso con la ubicación donde fue detenido, nosotros contactaremos a la persona que usted puso como persona de contacto y le informaremos que usted esta detenido y el lugar donde fue detenido</p>';
    }
	if (form_id == 'node_edit' && form.bundle == 'terminos_condiciones') {
    
      // Change the label for the name,
      form.elements.title.title = 'terminos';
	  
	  //Add today Date to a Title field(Fecha)
	  var fecha = new Date();
	  form.elements['title'].value = fecha;
      form.elements.submit.value = 'Guardar';	  
	  form.action = 'node/add/personal_information';
    }
	
	if (form_id == 'node_edit' && form.bundle == 'app_contact') {
    
      // Change the label for the name,
      form.elements.title.title = 'Asunto';	  
      form.elements.submit.value = 'Enviar';
	  form.submit.push('alert_new_question');
	  form.action = 'front_page';
    }

  }
  catch (error) { console.log('form_modifications_form_alter - ' + error); }
}

/**
 * Custom submit handler for New question Submited.
 */
function alert_new_question(form, form_state) {
  alert('Su pregunta ha sido enviada exitosamente, un representante de nuestra oficina estará en contacto con usted lo antes posible');
}
function alert_info_saved(form, form_state) {
  alert('Su información y la información de contacto se modificaron correctamente');
}

