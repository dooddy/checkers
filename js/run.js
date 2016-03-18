'use strict';

module.exports = ['$rootScope', '$state', '$timeout', 'authService', 'authConstants', function($rootScope, $state, $timeout, authService, authConstants) {
  authService.requestUser().then(function(user) {
    $rootScope.currentUser = user;
  });

  angular.forEach([authConstants.LOGGED_IN, authConstants.LOGGED_OUT], function(value) {
    $rootScope.$on(value, function() {
      $timeout(function() {
        $rootScope.currentUser = authService.getUser();
        if (!$rootScope.currentUser) {
          $state.go('app.notification');
        } else {
          $state.go('app.profile');
        }
      });
    })
  });

  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.data && toState.data.authorization && !authService.isLoggedIn()) {
      event.preventDefault();
      $state.go('app.notification');
    }
  });
}]