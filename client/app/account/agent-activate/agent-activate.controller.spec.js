'use strict';

describe('Controller: AgentActivateCtrl', function () {

  // load the controller's module
  beforeEach(module('waijuyiApp'));

  var AgentActivateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgentActivateCtrl = $controller('AgentActivateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
