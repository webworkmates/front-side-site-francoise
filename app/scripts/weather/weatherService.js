/**
 * Created by yanning on 12/04/2015.
 */
'use strict';
angular.module('siteFrancoiseApp').factory('weatherService',['$q','$http',function($q,$http){
  var cachedWeather={};
  return{
   getWeather:function(city) {
     var url = 'http://api.openweathermap.org/data/2.5/weather';
     var defer=$q.defer();

     if(!_.isUndefined(cachedWeather)&& !_.isEmpty(cachedWeather) ){

       defer.resolve(cachedWeather);
     }
     $http.jsonp(url, {
       params: {
         q: city,
         units: 'metric',
         callback: 'JSON_CALLBACK'
       }
     }).
       success(function (data) {
         cachedWeather=data;
         defer.resolve(data);
       }).
       error(function (data) {
         // Log an error in the browser's console.
         console.log('Could not retrieve data from ' + url);
         defer.reject(data);
       });
     return defer.promise;
   },
    realWeatherState:function(weather){
      var result;
      switch (weather){

        case 'thunderstorm':
          result='Orage';
          break;
        case 'drizzle':
          result='Bruine';
          break;
        case 'rain_1':
          result='Pluie';
          break;
        case 'rain_2':
          result='Pluie fine';
          break;
        case 'snow':
          result='Neige';
          break;
        case 'atmosphere':
          result='';
          break;
        case 'clouds_1':
          result='Ciel dégagé';
          break;
        case 'clouds_2':
          result='Ciel Couvert';
          break;
        case 'extreme':
          result='';
          break;
        case 'additional':
          result='Blizzard';
          break;

      }
      return result;
    },displayCloud: function (id) {
      var display;
      // Thunderstorm
      if (id >= 200 && id <= 232) {
        display= 'thunderstorm';
      }

      // Drizzle
      if (id >= 300 && id <= 321) {
        display=  'drizzle';
      }

      // Rain
      if (id >= 500 && id <= 531) {
        if (id === 511) {
          display=  'rain_1';
        }

        display=  'rain_2';
      }

      // Snow
      if (id >= 600 && id <= 622) {
        display=  'snow';
      }

      // Atmosphere
      if (id >= 701 && id <= 781) {
        display=  'atmosphere';
      }

      // Clouds
      if (id >= 800 && id <= 804) {
        if (id === 800 || id === 801) {
          display=  'clouds_1';
        }

        display= 'clouds_2';
      }

      // Extreme
      if (id >= 900 && id <= 906) {
        display=  'extreme';
      }

      // Additional
      if (id >= 951 && id <= 962) {
        display=  'additional';
      }
      return display;
    }

};
}]);

