/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('menuCtrl', ['$scope', '$rootScope', '$state', 'menu.menuService', 'weatherService', '$interval', 'menuFactory','helper', function ($scope, $rootScope, $state, menuService, weatherService, $interval, menuFactory,helper) {

    menuFactory.getmenuItems().then(function (data) {
      $scope.menuItems = data;
      //var string='';
      //_.each(data, function(data){
      //  string+=helper.setUrlName(data.menuItemName,data.active,data.active);
      //});
      //console.log(string)
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

    $scope.hover_partner=function(){
      $scope.partner_hover=true;
      $scope.event_hover=false;
      $scope.pedagogie_hover=false;
      $scope.medias_hover=false;
      $scope.contacts_hover=false;
    }

    $scope.hover_event=function(){
      $scope.event_hover=true;
      $scope.partner_hover=false;
      $scope.pedagogie_hover=false;
      $scope.medias_hover=false;
      $scope.contacts_hover=false;
    }

    $scope.hover_medias=function(){
      $scope.medias_hover=true;
      $scope.partner_hover=false;
      $scope.event_hover=false;
      $scope.pedagogie_hover=false;
      $scope.contacts_hover=false;
    }

    $scope.hover_contacts=function(){
      $scope.contacts_hover=true;
      $scope.partner_hover=false;
      $scope.event_hover=false;
      $scope.pedagogie_hover=false;
      $scope.medias_hover=false;
    }

    $scope.hover_pedagogie=function(){
      $scope.pedagogie_hover=true;
      $scope.partner_hover=false;
      $scope.event_hover=false;
      $scope.medias_hover=false;
      $scope.contacts_hover=false;
    }

    $scope.hover_accueil=function(){
      $scope.pedagogie_hover=false;
      $scope.partner_hover=false;
      $scope.event_hover=false;
      $scope.medias_hover=false;
      $scope.contacts_hover=false;
    }

    $scope.hover_team=function(){
      $scope.pedagogie_hover=false;
      $scope.partner_hover=false;
      $scope.event_hover=false;
      $scope.medias_hover=false;
      $scope.contacts_hover=false;
    }


    function ss(){
      if($state.$current.name==='error'){
        $scope.errorPage=true;
      }
    }

    ss();
  }]);
