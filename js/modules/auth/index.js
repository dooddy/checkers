'use strict';

module.exports = angular.module('checkers.auth', [])
    .constant('authConstants', require('./constants'))
    .service('authService', require('./auth-service'))
    .directive('auth', require('./auth-directive'));