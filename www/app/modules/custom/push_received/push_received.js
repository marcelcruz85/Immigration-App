/**
 * Implements hook_push_notifications_receive().
 **/
function push_received_push_notifications_receive(data) {

  // data.message
  // data.title
  // data.count
  // data.sound
  // data.image
  // data.additionalData
  if (data.additionalData && data.additionalData.nid) {
    drupalgap_goto('node/' + data.additionalData.nid);
  }
  // Display the push notification.
  drupalgap_alert(data.message, {
    title: drupalgap.settings.title,
    buttonName: 'OK'
  });

}