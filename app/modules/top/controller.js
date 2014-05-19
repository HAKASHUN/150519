'use strict';
(function(){
  var TopControllers = angular.module('top.controllers', []);
  var MainCtrl = function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  };
  MainCtrl.$inject = ['$scope'];

  // apply
  TopControllers.controller('MainCtrl', MainCtrl);
})();
