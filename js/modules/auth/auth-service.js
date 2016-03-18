'use strict';

module.exports = ['$rootScope', '$q', 'rootRef', 'authConstants', function ($rootScope, $q, rootRef, authConstants) {
  var service = this;

  service.getUser = function() {
    return service.user;
  };

  service.requestUser = function() {
    var deferred = $q.defer();
    var user = rootRef.getAuth();

    if (user) {
      service.setUser(user);
      deferred.resolve(user);
    } else {
      deferred.reject('Not authorized')
    }
    return deferred.promise;
  };

  service.setUser = function(authData) {
    service.user = authData;
  };

  service.loginWithGoogle = function() {
    rootRef.authWithOAuthPopup('google', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        service.setUser(authData);
        $rootScope.$broadcast(authConstants.LOGGED_IN);
      }
    });
  };

  service.isLoggedIn = function() {
    return service.user ? true : false;
  };

  service.logout = function() {
    rootRef.unauth();
    service.user = null;
    $rootScope.$broadcast(authConstants.LOGGED_OUT);
  }
}];