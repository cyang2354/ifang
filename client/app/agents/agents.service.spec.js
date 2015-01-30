'use strict';

describe('Service: agents', function () {

  // load the service's module
  beforeEach(module('waijuyiApp'));

  // instantiate service
  var agents;
  beforeEach(inject(function (_agents_) {
    agents = _agents_;
  }));

  it('should do something', function () {
    expect(!!agents).toBe(true);
  });

});
