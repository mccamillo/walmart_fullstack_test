'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:CheckoutctrlCtrl
 * @description
 * # CheckoutctrlCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('CheckoutCtrl', ['$scope', '$location', 'Cart', '$window', function ($scope, $location, Cart, $window) {
    
  	$scope.go = function (path) {
  	  $location.path(path);
  	};

  	$scope.Cart = Cart.getCart();
  	if($window.jQuery.isEmptyObject($scope.Cart)) { $scope.go('/cart');}

  	$scope.Cart.priceAfterDiscount = $scope.Cart.totalValue - ($scope.Cart.totalValue * $scope.Cart.discount / 100);

  }]);
