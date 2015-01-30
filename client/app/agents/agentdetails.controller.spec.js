'use strict';

describe('Controller: AgentdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('waijuyiApp'));

  var AgentdetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgentdetailsCtrl = $controller('AgentdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
