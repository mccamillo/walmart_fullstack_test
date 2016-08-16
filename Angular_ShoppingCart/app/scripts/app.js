'use strict';

/**
 * @ngdoc overview
 * @name shoppingCartApp
 * @description
 * # shoppingCartApp
 *
 * Main module of the application.
 */
angular
  .module('shoppingCartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularCSS'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        css: ['styles/main.css', 'styles/structure.min.css', 'styles/jquery-ui.css', 'styles/cart.css']
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart',
        css: ['styles/main.css', 'styles/structure.min.css', 'styles/jquery-ui.css', 'styles/cart.css']
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout',
        css: ['styles/main.css', 'styles/checkout.css']
      })
      .otherwise({
        redirectTo: '/'
      });
  });
