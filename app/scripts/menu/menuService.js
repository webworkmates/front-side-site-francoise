/**
 * Created by yanning on 12/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp').service('menu.menuService',['$q',function($q){
  return {
    initializeMenu: function () {
      var defer = $q.defer();
      var menu = [{
        'name': 'ACCUEIL',
        'urlName': 'accueil',
        'class': 'glyphicon glyphicon-home',
        'active': 'accueil'
      },
        {
          'name': 'AUDIOTHEQUE',
          'urlName': 'audiotheque',
          'class': 'glyphicon glyphicon-music',
          'active': 'audiotheque'
        },
        {
          'name': 'VIDEOTHEQUE',
          'urlName': 'videotheque',
          'class': 'glyphicon glyphicon-film',
          'active': 'videotheque'
        },
        {
          'name': 'PHOTOTHEQUE',
          'urlName': 'phototheque',
          'class': 'glyphicon glyphicon-picture',
          'active': 'phototheque'
        },
        {
          'name': 'AGENDA',
          'urlName': 'agenda',
          'class': 'glyphicon glyphicon-calendar',
          'active': 'agenda'
        },
        {
          'name': 'CONTACT',
          'urlName': 'contact',
          'class': 'glyphicon glyphicon-pencil',
          'active': 'contact'
        }];
      defer.resolve(menu);
      return defer.promise;
    },
    getVisitorLocation: function () {
      var defer = $q.defer();
      var location = {};

      if(!_.isUndefined(google)){
        location.city = google.loader.ClientLocation.address.city;
        location.latitude = google.loader.ClientLocation.latitude;
        location.longitude = google.loader.ClientLocation.longitude;
      }
      defer.resolve(location);
      return defer.promise;
    },
    formatDate: function (date) {
      var jour = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
      var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      var jourSemaine;
      if (date.getDay() === 0) {
         jourSemaine = jour[6];
      } else {
        jourSemaine = jour[date.getDay() - 1];
      }
      var formattedDate = jourSemaine + ' ' + (date.getDate()) + ' ' + mois[date.getMonth()] + ' ' + date.getFullYear();
      return formattedDate;
    },
    setHorloge: function () {
      var date = new Date();
      var hour = '';
      hour += '' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '';
      return hour;
    }
  };
}]);
