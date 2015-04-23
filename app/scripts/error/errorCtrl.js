/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
angular.module('siteFrancoiseApp')
  .controller('errorCtrl',['$scope', function ($scope) {
    $scope.errorMessage='Page not found.If you think you have arrived here by our mistake,please contact us.';

  }]);

