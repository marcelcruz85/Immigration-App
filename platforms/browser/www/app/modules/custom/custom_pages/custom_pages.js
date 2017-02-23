/**
 * Implements hook_menu().
 */
function custom_pages_menu() {
  var items = {};
            items['article_images'] = {
              title: 'Mensajes',
              page_callback: 'custom_pages_article_images',
			  options:{
				reloadPage:true
			  }
  };
  return items;
}
/**
 * The page callback to display the view custom_pages_article_images.
 */
function custom_pages_article_images() {
  try {
    var content = {};
       
    content['my_articles_list'] = {
      theme: 'view',
      format: 'ul',
      path: 'drupalgap/article-images', /* the path to the view in Drupal */
      row_callback: 'custom_pages_article_images_list_row',
      empty_callback: 'custom_pages_article_images_list_empty',
      attributes: {
        id: 'article_listing_items'
      }
    };
	
	
	return content;
  }
  catch (error) { console.log('custom_pages_article_images - ' + error); }
}
 
/**
 * The row callback to render a single row.
 */
function custom_pages_article_images_list_row(view, row, variables) {
  try {
        
      var image_html = theme('image', { path: row.picture.src });
      var title_html = '<h2>' + row.title + '</h2>';
      var link_html = l(image_html + '</br>' + title_html, 'node/' + row.nid);
    
      return link_html;
	  

            
  }
  catch (error) { console.log('custom_pages_article_images_list_row - ' + error); }
}
 
/**
 * Callback function for no results.
 */
function custom_pages_article_images_list_empty(view, variables) {
  try {
    return '<p>Sorry, no articles were found.</p>';
  }
  catch (error) { console.log('custom_pages_article_images_list_empty - ' + error); }
}