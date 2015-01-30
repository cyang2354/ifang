'use strict';


angular.module('waijuyiApp')
  .controller('AgentsCtrl', function ($scope, agents) {
    agents.list(function(agents) {
      $scope.agents = agents;
    });

  });