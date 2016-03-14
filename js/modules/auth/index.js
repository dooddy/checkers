'use strict';

module.exports = angular.module('checkers.auth', [])
    .service('authService', require('./auth-service'))
    .directive('auth', require('./auth-directive'));