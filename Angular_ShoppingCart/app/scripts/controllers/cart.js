'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:CartctrlCtrl
 * @description
 * # CartctrlCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('CartCtrl', ['$scope', '$location', 'Products', 'Cart', function ($scope, $location, Products, Cart) {
    
    Products.success(function(data){
      $scope.products = data;
      for (var i in $scope.products) {
        $scope.products[i].SUBTOTAL = function() {
          return this.VALUE * this.QUANTITY;
        };
      }
    }).error(function(data, status){
      console.log(data, status);
      $scope.products = [];
    });

    $scope.TOTAL_ITEMS = function() {
    	var total = 0;
    	for (var i in $scope.products) {
    		total = total + $scope.products[i].QUANTITY;
    	}
    	return total;
    };

    $scope.TOTAL_VALUE = function() {
    	var total = 0;
    	for (var i in $scope.products) {
    		total = total + $scope.products[i].SUBTOTAL();
    	}
    	return total;
    };

    $scope.remove = function(index) {
    	$scope.products.splice(index, 1);
    };

    $scope.addOne = function(index) {
    	if($scope.products[index].QUANTITY < 99) {$scope.products[index].QUANTITY++;}
    };

    $scope.removeOne = function(index) {
    	if($scope.products[index].QUANTITY > 1) {$scope.products[index].QUANTITY--;}
    };

    $scope.checkout = function() {
      if($scope.TOTAL_VALUE() < 200) {
      	$scope.msgon('O valor total da compra deve ser maior que R$ 200,00');
        return;
      }

      // Discount calculation
      if($scope.TOTAL_VALUE() < 500) { $scope.discount = 0;}
      if($scope.TOTAL_VALUE() >= 500 && $scope.TOTAL_VALUE() < 600) { $scope.discount = 5;}
      if($scope.TOTAL_VALUE() >= 600 && $scope.TOTAL_VALUE() < 700) { $scope.discount = 10;}
      if($scope.TOTAL_VALUE() > 700) { $scope.discount = 15;}

      Cart.setCart($scope.products, $scope.TOTAL_VALUE(), $scope.discount);

      $scope.go('/checkout');
    };

    $scope.go = function(path) {
  	  $location.path(path);
  	};

    $scope.msgon = function(msg) {
      $scope.err = true;
      $scope.msg = msg;
    };

    $scope.msgoff = function() {
      $scope.err = false;
      $scope.msg = '';
    };

  }]);
