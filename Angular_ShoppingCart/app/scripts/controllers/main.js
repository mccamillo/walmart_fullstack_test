'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.go = function ( path ) {
  	  $location.path(path);
  	};
  }]);
