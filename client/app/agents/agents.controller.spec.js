'use strict';

describe('Controller: AgentsCtrl', function () {

  // load the controller's module
  beforeEach(module('waijuyiApp'));

  var AgentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgentsCtrl = $controller('AgentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
