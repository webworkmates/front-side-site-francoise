/**
 * Created by yanning on 11/04/2015.
 */

'use strict';
angular
  .module('siteFrancoiseApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    var routes =
    $urlRouterProvider.otherwise('prehome');
    $stateProvider
      .state('accueil', {
        url: '/accueil',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          }

        }

      })
      .state('teambuilding', {
        url: '/teambuilding',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/teambuilding/teambuilding.html',
            controller: 'teambuildingCtrl'
          }

        }

      })
      .state('evenementiel', {
        url: '/evenementiel',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/evenementiel/evenementiel.html',
            controller: 'evenementielCtrl'
          }

        }

      })
      .state('medias', {
        url: '/medias',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/medias/medias.html',
            controller: 'mediasCtrl'
          }

        }

      })
      .state('groupes', {
        url: '/groupes',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/groupes/groupes.html',
            controller: 'groupesCtrl'
          }

        }

      })
      .state('contacts', {
        url: '/contacts',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/contact/contact.html',
            controller: 'contactCtrl'
          }

        }
      })
      .state('pedagogie', {
        url: '/pedagogie',
        views: {
          'menu@': {
            templateUrl: 'views/menu/menu.html',
            controller: 'menuCtrl'
          },
          'content@': {
            templateUrl: 'views/pedagogie/pedagogie.html',
            controller: 'pedagogieCtrl'
          }

        }

      })
      .state('prehome', {
          url: '/prehome',
          views: {
            'content@': {
              templateUrl: 'views/prehome/prehome.html',
              controller: 'prehomeCtrl'
            }
          }
        });

  }]);

