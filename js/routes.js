'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: './templates/pages/main.html',
        controller: require('./controllers/main-controller')
      })
      .state('app.notification', {
        url: 'notification',
        templateUrl: './templates/pages/notification.html'
      })
      .state('app.profile', {
        url: 'profile',
        templateUrl: './templates/pages/profile.html',
        controller: require('./controllers/profile-controller'),
        data: {
          authorization: true
        }
      })
  }];
