'use strict';

module.exports = ['authService', function(authService) {
  return {
    restrict: 'E',
    templateUrl: './templates/modules/auth/auth.html',
    controller: ['$rootScope', '$scope', function($rootScope, $scope) {
      $scope.loginWithGoogle = function() {
        authService.loginWithGoogle();
      };

      $scope.logout = function() {
        authService.logout();
      };
    }]
  }
}];
