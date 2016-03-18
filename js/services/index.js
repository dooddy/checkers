'use strict';

module.exports = angular.module('checkers.services', [])
    .constant('FirebaseUrl', 'https://dmitros-checkers.firebaseio.com')
    .service('rootRef', ['FirebaseUrl', Firebase]);