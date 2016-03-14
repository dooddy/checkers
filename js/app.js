'use strict';

// include libs
require('angular-material');
require('angular-ui-router');
require('firebase');
require('angularfire');

// include app modules
require('./modules');

// include app services
require('./services');

var app = require('angular').module('checkers', [
  // libs
  'ngMaterial',
  'ui.router',
  'firebase',

  // modules
  'checkers.auth',

  // services
  'checkers.services'
]).config(require('./routes'));