var app = angular.module('Sims4Pal', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'ui.bootstrap']);
app.controller("MainController", ['$scope', function($scope) {}]);
angular.module('Sims4Pal')
.config(function($locationProvider, $routeProvider) {
  
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'resources/home.html',
    controller: 'HomeController'
  })
  .when('/Sims4Pal_App/home', {
    templateUrl: 'resources/home.html',
  })
  .when('/Sims4Pal_App/cheats', {
    templateUrl: 'resources/cheatspage.html',
    controller: 'CheatsController'
  })
  .when('/Sims4Pal_App/mods', {
    templateUrl: 'resources/customContent.html',
    controller: 'PanelController'
  })
  .when('/Sims4Pal_App/collections', {
    templateUrl: 'resources/collections.html',
    controller: 'TableController'
  })
  .when('/Sims4Pal_App/guides', {
    templateUrl: 'resources/guides.html',
    controller: 'AccordionDemoCtrl'
  })
  .when('/Sims4Pal_App/accounts/register', {
    templateUrl: 'resources/register.html',
    controller: 'RegisterController'
  })
  .when('/Sims4Pal_App/accounts/login', {
    templateUrl: 'resources/login.html',
  })
  .when('/Sims4Pal_App/accounts/logout', {
    templateUrl: 'resources/logout.html',
    controller: 'LogoutController'
  })
  .otherwise({
    redirectTo: '/Sims4Pal_App/'
  }); // if not above path
});

