'use strict';

/**
 * @ngdoc service
 * @name shoppingCartApp.Cart
 * @description
 * # Cart
 * Factory in the shoppingCartApp.
 */
angular.module('shoppingCartApp')
  .factory('Cart', function () {

    var Cart = {};

    // Public API here
    return {
      getCart: function () {
        return Cart;
      },

      setCart: function (products, totalValue, discount) {
        Cart.products = products;
        Cart.totalValue = totalValue;
        Cart.discount = discount;
      }
    };
  });
