'use strict';

module.exports = ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left-menu').toggle();
  }
}];
