/**************|
 * Development |
 **************/

// Uncomment to clear the app's local storage cache each time the app loads.
//window.localStorage.clear();

// Set to true to see console.log() messages. Set to false when publishing app.
Drupal.settings.debug = true;

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/

/* DRUPAL PATHS */
 
// Site Path (do not use a trailing slash)
Drupal.settings.site_path = 'http://yourclg.com'; // e.g. http://www.example.com

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Files Directory Paths (use one or the other)
Drupal.settings.file_public_path = 'sites/default/files';
//Drupal.settings.file_private_path = 'system/files';

// The Default Language Code
Drupal.settings.language_default = 'und';

/* CACHING AND PERFORMANCE */

// Entity Caching
Drupal.settings.cache.entity = {

  /* Globals (will be used if not overwritten below) */
  enabled: false,
  expiration: 60, // # of seconds to cache, set to 0 to cache forever

  /* Entity types */
  entity_types: {

    /* Comments */
    /*comment: {
     bundles: {}
     },*/

    /* Files */
    /*file: {
     bundles: {}
     },*/

    // Nodes
    /*node: {

      // Node Globals (will be used if not overwritten below)
      enabled: true,
      expiration: 120,

      // Content types (aka bundles)
      bundles: {

        article: {
          expiration: 3600
        },
        page: {
          enabled: false
        }

      }
    },*/

    /* Terms */
    /*taxonomy_term: {
     bundles: {}
     },*/

    /* Vocabularies */
    /*taxonomy_vocabulary: {
     bundles: {}
     },*/

    /* Users */
    /*user: {
     bundles: {}
     }*/

  }

};

/* Views Caching */

Drupal.settings.cache.views = {
  enabled: false,
  expiration: 3600
};

/*********************|
 * DrupalGap Settings |
 *********************/

// DrupalGap Mode (defaults to 'web-app')
//  'web-app' - use this mode to build a web application for a browser window
//  'phonegap' - use this mode to build a mobile application with phonegap
drupalgap.settings.mode = 'phonegap';

// Language Files - locale/[language-code].json
drupalgap.settings.locale = {
   /* es: { } */
};

drupalgap.settings.push_notifications = {
  android: {
    senderID: "259799369871"
  },
  ios: {
    alert: "true",
    badge: "true",
    sound: "true"
  },
  windows: {}
};
/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = 'Mi Abogado';
 
// App Front Page
drupalgap.settings.front = 'front_page';

// Theme
drupalgap.settings.theme = 'easystreet3';

// Logo
drupalgap.settings.logo = 'themes/easystreet3/images/miabogado.png';

// Offline Warning Message. Set to false to hide message.
drupalgap.settings.offline_message = 'No connection found!';

// Exit app message.
drupalgap.settings.exit_message = 'Esta seguro que desea salir de ' + drupalgap.settings.title + '?';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
  loading: {
    text: 'Loading...',
    textVisible: true,
    theme: 'b'
  },
  saving: {
    text: 'Saving...',
    textVisible: true,
    theme: 'b'
  },
  deleting: {
    text: 'Deleting...',
    textVisible: true,
    theme: 'b'
  }
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

/** Contributed Modules - www/app/modules **/

Drupal.modules.contrib['push_notifications'] = {};
Drupal.modules.contrib['ds'] = {};
Drupal.modules.contrib['autoassignrole'] = {};
Drupal.modules.contrib['geofield'] = {};
Drupal.modules.contrib['geofield_gmap'] = {};
Drupal.modules.contrib['telephone'] = {};

//Drupal.modules.contrib['example'] = {};

/** Custom Modules - www/app/modules/custom **/

//Drupal.modules.custom['my_module'] = {};

Drupal.modules.custom['push_received'] = {};
Drupal.modules.custom['front_page'] = {};
Drupal.modules.custom['direction_page'] = {};
//Drupal.modules.custom['custom_blocks'] = {};
Drupal.modules.custom['custom_pages'] = {};
Drupal.modules.custom['personal_information'] = {};
Drupal.modules.custom['terminos_condiciones'] = {};
Drupal.modules.custom['auto_login'] = {};
Drupal.modules.custom['form_modifications'] = {};
//Drupal.modules.custom['slide_menu'] = {};


/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {}; // Do not remove this line.

// User Menu Anonymous
/** drupalgap.settings.menus['user_menu_anonymous'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'My Account',
      path: 'user',
      options: {
        attributes: {
          'data-icon': 'user',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    }//,
  ]
};
 */
// User Menu Authenticated
/** drupalgap.settings.menus['user_menu_authenticated'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'My Account',
      path: 'user',
      options: {
        attributes: {
          'data-icon': 'user',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    }//,
  ]
}; */

// Main Menu
/* drupalgap.settings.menus['main_menu'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title:'Infomarción Personal y de Contacto',
      path:'personal',
      options:{
        attributes: {
          'data-icon': 'star',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    } 
  ]
}; */

/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {}; // Do not remove this line.

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.easystreet3 = {
  header: {
/*  	_prefix: {
      my_panel_block: { }
    } 
    /* ... other blocks ... */
    //my_panel_block_button: { }
		//main_menu: { },
		title: { }
/**  user_menu_anonymous: {
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    user_menu_authenticated: {
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    }, 
    */
  },
/*   sub_header: {
    title: { }
  }, */
  navigation: {
    primary_local_tasks: { }
  },
  content: {
    messages: { },
    main: { }
  },
  footer: {
    //powered_by: { }
	sos_menu: { }
  }
};

/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {}; // Do not remove this line.

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
  links:[
    /* Main Menu Popup Menu Button */
/*     {
      options: {
        popup: true,
        popup_delta: 'main_menu',
        attributes: {
          'class': 'ui-btn-right ui-nodisc-icon',
          'data-icon': 'gear'
        }
      }
    } *///,
    /* Home Button */
    /**{
      path: '',
      options: {
        attributes: {
          'data-icon': 'home',
          'data-iconpos': 'notext',
          'class': 'ui-btn-left'
        }
      },
      pages: {
        value: [''],
        mode: 'exclude'
      }
    },
    // Anonymous User Popup Menu Button
	{
      options: {
        popup: true,
        popup_delta: 'user_menu_anonymous',
        attributes: {
          'class': 'ui-btn-right ui-nodisc-icon',
          'data-icon': 'gear'
        }
      },
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    }, 
    // Authenticated User Popup Menu Button 
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_authenticated',
        attributes: {
          'class': 'ui-btn-right ui-nodisc-icon',
          'data-icon': 'gear'
        }
      },
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    } */
  ]
};

// Footer Region Links
drupalgap.settings.menus['sos_menu'] = {
  links:[
/*     {
      title: '¡Estoy Detenido! <br> Presione aquí',
      path: 'node/add/sos',
      options: {
        attributes: {
          'class': 'ui-btn sos'
        }
      }
    }  */
  ]
};

drupalgap.settings.menus.regions['footer'] = {
  links: [
    // Back Button 
 	{
      options: {
        attributes: {
          'data-icon': 'back',
          'data-iconpos': 'notext',
          'class': 'ui-btn-right',
          'onclick': 'javascript:drupalgap_back();'
        }
      }, 
       pages: {
        value: [''],
        mode: 'exclude'
      } 
    }
  ]
};

/*********|
 * Camera |
 **********/
drupalgap.settings.camera = {
  quality: 90
};

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

