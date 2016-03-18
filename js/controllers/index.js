'use strict';

module.exports = angular.module('checkers.controllers', [])
    .controller('mainCtrl', require('./main-controller'))
    .controller('profileCtrl', require('./profile-controller'));