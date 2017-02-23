/**
 * Implements hook_menu().
 */
function direction_page_menu() {
  try {
    var items = {};
    items['direction_page'] = {
      title: 'Direcciones',
      page_callback: 'direction_page_hello_world_page'
    };
    return items;
  }
  catch (error) { console.log('direction_page_menu - ' + error); }
}

function direction_page_hello_world_page() {
  try {
	var content = {};
	content['my_markup'] = {
		markup:  "<div class='directions'>" +
		"<div class='item'>" +
		"<h3>Chicago</h3>" +
		"<p>" + 
			"6232 N. Pulaski Rd, </br>" +
			"Suite 200 </br>" + 
			"Chicago IL, 60646" + 
		"</p>" +
		  
		"<h4>Horario</h4><p>Lunes – Viernes: 9am – 7pm </br>Sábado – Domingo: 9:30am – 3:30pm</p>" +
		"</div>" +
		"<div class='item'>" +
		"<h3>Berwyn</h3>" +
		"<p>" + 
			"6339 W. Cermak Rd, </br>" +
			"Berwyn IL, 60403" + 
		"</p>" +
		  
		"<h4>Horario</h4><p>Lunes – Viernes: 9am – 7pm </br>Sábado – Domingo: Cerrado</p>" +
		"</div>" +
		"</div>"  
	}; 
	content['my_button'] = {
		theme: 'button',
		text: 'Como Llegar a <br/>Chicago',
		attributes: {
			onclick: "directions.navigateTo('41.995109,-87.729239');",
			class: 'directionto',
			'data-icon': 'navigation',
			'data-iconpos': 'top'
		}
	};	
	content['my_button_1'] = {
		theme: 'button',
		text: 'Como Llegar a <br/>Berwyn',
		attributes: {
			onclick: "directions.navigateTo('41.8505589,-87.7832918,19');",
			class: 'directionto',
			'data-icon': 'navigation',
			'data-iconpos': 'top'
		}
	};	
	return content;
  }
  catch (error) { console.log('direction_page_hello_world_page - ' + error); }
}