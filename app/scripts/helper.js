/**
 * Created by yanning on 24/04/2015.
 */
'use strict';
angular.module('siteFrancoiseApp').service('helper', function () {
  return {
    handleError: function handleError(response) {
      if (
        !angular.isObject(response.data) || !response.data.message
      ) {

        console.log('An unknown error occurred.');
        return 'An unknown error occurred.';
      }
      console.log(response.data.message);
      return response.data.message;
    },

    handleSuccess: function handleSuccess(response) {

      return ( response.data );

    },

    setUrlName: function setUrlName(state, urlName, menu) {
      var routes = '.state(\'' + state + '\', {url: \'' + '/' + urlName + '\',views: {\'menu@\': {templateUrl: \'views/' + menu + '/' + menu + '.html\',controller:\'' + menu + 'Ctrl\'},\'content@\': {templateUrl: \'views/' + urlName + '/' + urlName + '.html\', controller: \'MainCtrl\'}}})';
      return routes;
    }
  };
});


