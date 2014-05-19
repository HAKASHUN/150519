'use strict';
(function(){
  // top module
  var Top = angular.module('top', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'top.controllers'
  ]);
  // config for top module
  var config = function($routeProvider) {
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
  };

  // apply
  Top.config(config);
})();