/**
 * Created by yanning on 24/04/2015.
 */
'use strict';
angular.module('siteFrancoiseApp').service('menuFactory', ['$http', '$q', 'helper', 'config', function ($http, $q, helper, config) {
  var menuItems;
  return ({
    getmenuItems: getmenuItems
  });
  function getmenuItems() {
    var defer = $q.defer();

    if (!_.isUndefined(menuItems)) {
      defer.resolve(menuItems);
      return defer.promise;
    }
    var request = $http({
      method: 'get',
      url: config.server.url+'/menuItems',
      headers: {'Accept': 'application/json'}
    });
    var result = request.then(helper.handleSuccess, helper.handleError);
    defer.resolve(result);
    menuItems = result;
    return defer.promise;
  };

}]);

