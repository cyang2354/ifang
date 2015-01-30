'use strict';

describe('Controller: AgentSignupCtrl', function () {

  // load the controller's module
  beforeEach(module('waijuyiApp'));

  var AgentSignupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgentSignupCtrl = $controller('AgentSignupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
