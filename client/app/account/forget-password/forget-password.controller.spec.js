'use strict';

describe('Controller: ForgetPasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('waijuyiApp'));

  var ForgetPasswordCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgetPasswordCtrl = $controller('ForgetPasswordCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
