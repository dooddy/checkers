'use strict';

module.exports = ['checkersFire', function (checkersFire) {
  var service = this;

  service.getUser = function() {
    return service.user ? service.user : checkersFire.ref.getAuth();
  };

  service.setUser = function(authData) {
    service.user = authData;
  };

  service.loginWithGoogle = function(callback) {
    checkersFire.ref.authWithOAuthPopup('google', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        service.setUser(authData);
        if (callback) callback();
      }
    });
  };

  service.logout = function(callback) {
    checkersFire.ref.unauth();
    service.user = null;
    if(callback) callback();
  }
}];