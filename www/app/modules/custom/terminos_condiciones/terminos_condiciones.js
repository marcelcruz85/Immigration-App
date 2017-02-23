/**
 * Implements hook_menu().
 */
function terminos_condiciones_menu() {
  try {
    var items = {};
    items['terminos_condiciones'] = {
      title: 'Términos y Condiciones',
      page_callback: 'terminos_condiciones_page'
    };
    return items;
  }
  catch (error) { console.log('terminos_condiciones_menu - ' + error); }
}

function terminos_condiciones_page() {
  try {	  
	var content = {};
	content['my_markup'] = {
		markup: "<h3>Términos y Condiciones</h3>" +
		'<p>Consumer Law Group, LLC / Los Guardianes Del Pueblo que tiene un sitio web ubicado en la dirección http: // www.losguardianesdelpueblo.com y/o www.yourclg.com (junto a que se refiere el presente documento, el "Sitio Web"), es una firma de abogados con sede en Illinois. Al acceder o utilizar el Sitio Web y la aplicación Guardianes Del Pueblo y pulsando en el botón "ACEPTO" en la parte inferior de este Acuerdo, usted como Usuario de los Servicios de CLG y la App como se define a continuación ("usted" o "su" o "Usuario ") de acuerdo a los términos y condiciones de este Acuerdo de Usuario de CLG (el "Acuerdo de Usuario "). Este Acuerdo de Usuario es un acuerdo legal entre usted y CLG. Salvo lo dispuesto en este Acuerdo del Usuario o por la ley aplicable, no hay otros términos, garantías o representaciones (implícita o explícita) que serán obligatorias para CLG. A los efectos de este Acuerdo de Usuario, "los esfuerzos comercialmente razonables" significa que los esfuerzos de una persona de negocios razonable ordinaria. Usted y CLG acuerdan lo siguiente:</p>' +
		'<p>A. Tipo de Servicio de CLG. CLG es una firma de abogados con sede en Illinois prestando servicio a clientes de inmigración en todo el país. Para cualquier servicio que no sea la Ley de Inmigración, sólo podemos representar a clientes en Illinois. La aplicación es para propósitos informativos solamente y CLG no tiene obligación de realizar cualquier servicio legal para Usted, de cualquier manera. Sólo se formará una relación de Abogado/Cliente después de ejecutar un Acuerdo de Compromiso de CLG (el "Acuerdo"). Sólo después de que se ejecute el Acuerdo tendrá CLG la obligación de prestar servicios jurídicos en relación con su asunto legal. Por favor, tenga en cuenta que nada de lo contenido en el sitio web CLG o en la aplicación se interpretará como dar asesoramiento jurídico y nada contenido en el sitio web o en la App creará la relación abogado-cliente entre usted y CLG.</p>' +
		'<p>AL HACER CLIC EN EL BOTÓN "ACEPTO" A CONTINUACIÓN, EL USUARIO ACUERDA QUE CLG, INCLUYENDO SUS FUNCIONARIOS, INVERSORES, AGENTES Y EMPLEADOS, NO ES RESPONSABLE POR LAS ACCIONES O INACCIONES DE UN ABOGADO PARTICIPAR, Y QUE CLG, INCLUYENDO SUS FUNCIONARIOS, LOS INVERSORES, AGENTES Y EMPLEADOS, NO ES EN MODO RESPONSABLE ANTE EL USUARIO O CUALQUIER OTRA PARTE POR LAS ACCIONES O INACCIONES DE UN ABOGADO PARTICIPANTE O CUALQUIER MIEMBRO DEL PERSONAL DE CLG. EN EL CASO DE LOS USUARIOS DE SECUNDARIA Y USUARIOS DE TERCEROS, EL USUARIO ACEPTA Y POR ESTE MEDIO INDEMNIZAR Y MANTENER INDEMNE A CLG, INCLUYENDO SUS OFICIALES, DIRECTORES, EMPLEADOS, ABOGADOS, INVERSORES, AGENTES Y EMPLEADOS, PARA CUALQUIER RECLAMO AFIRMADO POR DICHA SECUNDARIA USUARIOS O USUARIOS DE TERCEROS POR LAS ACCIONES O INACCIONES DE CLG.</p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>' +
		'<p></p>'
	}
	return content; 
  }
  catch (error) { console.log('terminos_condiciones_page - ' + error); }
}