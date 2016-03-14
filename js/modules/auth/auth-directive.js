'use strict';

module.exports = ['authService', function(authService) {
  return {
    restrict: 'E',
    templateUrl: './partials/auth/auth.html',
    controller: ['$scope', '$timeout', function($scope, $timeout) {
      getUser();

      $scope.loginWithGoogle = function() {
        authService.loginWithGoogle(getUser);
      };

      $scope.logout = function() {
        authService.logout(getUser);
      };

      function getUser() {
        $timeout(function() {
          $scope.user = authService.getUser();
        })
      }
    }]
  }
}];
