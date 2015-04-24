/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('menuCtrl', ['$scope', '$rootScope', '$state', 'menu.menuService', 'weatherService', '$interval', 'menuFactory', function ($scope, $rootScope, $state, menuService, weatherService, $interval, menuFactory) {
    //menu.query().$promise.then(function(data){
    //  console.log(data);
    //});

    menuFactory.getmenuItems().then(function (data) {
      $scope.menuItems = data;
    })


    $scope.hour=menuService.setHorloge();
    $scope.date=menuService.formatDate(new Date());
    $interval(function(){
      var date = new Date();
      var hour = '';
      hour += '' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      $scope.hour=hour;
    },1000);
    menuService.getVisitorLocation().then(function(location){
      weatherService.getWeather(location.city).then(function(data){
        $scope.temp=Math.round(data.main.temp);
        $scope.weather=weatherService.realWeatherState(weatherService.displayCloud(data.weather[0].id));
        $scope.icon=weatherService.displayCloud(data.weather[0].id);

      });
      $scope.city=location.city;
    });
    $interval(function(){
      menuService.getVisitorLocation().then(function(location){
        weatherService.getWeather(location.city).then(function(data){
          $scope.temp=Math.round(data.main.temp);
          $scope.weather=weatherService.realWeatherState(weatherService.displayCloud(data.weather[0].id));
          $scope.icon=weatherService.displayCloud(data.weather[0].id);

        });
        $scope.city=location.city;
      });
    },600000);
    $scope.setActive=function(state){
        if($state.$current.name===state){
          return true;
        }
    };
    function ss(){
      if($state.$current.name==='error'){
        $scope.errorPage=true;
      }
    }

    ss();
  }]);
