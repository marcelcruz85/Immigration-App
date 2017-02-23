
/**
 * Auto Login and registration with the Device ID
 */
 function auto_login_deviceready() {

	/** Login in with device ID */
			var account = {
			  name:device.uuid,
			  mail:device.uuid + '@miabogado.com',
			  pass:device.uuid
			};
             user_save(account, {
                  success:function(result) {
                       console.log('New Account created');
                  },
                  error:function(xhr, status, message){
                       var name = device.uuid;
                       var pass = device.uuid;
                       user_login(name, pass, {
                           success:function(result){
                             //alert('Hi, ' + result.user.name + '!');
                           }
                       });
                  }
             });
 }