/**
 * Implements hook_field_formatter_view().
 */
function ds_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
  try {

    /*dpm(entity_type);
    dpm(entity);
    dpm(field);
    dpm(instance);
    dpm(langcode);
    dpm(items);
    dpm(display);*/

    return '';

    // Iterate over each item, and place a widget onto the render array.
    /*var content = {};
    $.each(items, function(delta, item) {
        content[delta] = { markup: '' }; }
    });
    return content;*/
  }
  catch (error) { console.log('ds_field_formatter_view - ' + error); }
}
