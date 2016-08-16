'use strict';

describe('Controller: CheckoutctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('shoppingCartApp'));

  var CheckoutctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckoutctrlCtrl = $controller('CheckoutctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CheckoutctrlCtrl.awesomeThings.length).toBe(3);
  });
});
