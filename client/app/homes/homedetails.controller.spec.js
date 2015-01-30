'use strict';

describe('Controller: HomedetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('waijuyiApp'));

  var HomedetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomedetailsCtrl = $controller('HomedetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
