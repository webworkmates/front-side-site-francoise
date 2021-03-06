'use strict';

/**
 * @ngdoc overview
 * @name siteFrancoiseApp
 * @description
 * # siteFrancoiseApp
 *
 * Main module of the application.
 */
angular
  .module('siteFrancoiseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngStorage',
    'weather',
    'pascalprecht.translate',
    'routing',
    'menu'
  ]).run(['$rootScope', '$state', function () {

  }]);
