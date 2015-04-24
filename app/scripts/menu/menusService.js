/**
 * Created by yanning on 24/04/2015.
 */
'use strict';
var app = angular.module('siteFrancoiseApp');
app.service('menuFactory', ['$http', '$q', function ($http, $q) {
  return ({
    getmenuItems: getmenuItems
  });
  function getmenuItems() {
    var request = $http({
      method: 'get',
      url: 'http://localhost:8085/menuItems',
      headers: {'Accept': 'application/json'}
    });
    return ( request.then(handleSuccess, handleError) );
  };

}]);
