'use strict';

angular
  .module('myGameApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: ''
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  });
