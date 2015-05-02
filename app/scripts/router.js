/**
 * Created by yanning on 29/04/2015.
 */
'use strict';
angular.module('siteFrancoiseApp', ['ui.router'])
  .provider('router',['menuFactory',function($stateProvider){
    var urlCollection;

    this.$get = function ($http, $state) {
      return {
        setUpRoutes: function () {
          $http.get(urlCollection).success(function (collection) {
            for (var routeName in collection) {
              if (!$state.get(routeName)) {
                $stateProvider.state(routeName, collection[routeName]);
              }
            }
          });
        }
      };
    };

    this.setCollectionUrl = function () {
      menuFactory.getmenuItems().then(function (data) {
        _.each(data, function (item) {
          var menu = 'menu';
          urlCollection+=setUrlName(item.menuItemName, item.urlName, menu);
        });
      });
    //  urlCollection = url;
    };
  }]).run(function (router) {
    router.setUpRoutes();
  });
