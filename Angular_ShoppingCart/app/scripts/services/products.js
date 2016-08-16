'use strict';

/**
 * @ngdoc service
 * @name shoppingCartApp.Products
 * @description
 * # Products
 * Factory in the shoppingCartApp.
 */
angular.module('shoppingCartApp')
  .factory('Products', ['$http', function ($http) {
    return $http.get('http://localhost:3000/products');
  }]);
