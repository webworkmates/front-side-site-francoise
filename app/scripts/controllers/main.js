'use strict';

/**
 * @ngdoc function
 * @name siteFrancoiseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siteFrancoiseApp
 */
angular.module('siteFrancoiseApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
