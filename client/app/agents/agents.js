'use strict';

angular.module('waijuyiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('agents', {
        url: '/agents',
        templateUrl: 'app/agents/agents.html',
        controller: 'AgentsCtrl'
      })
	  .state('agentdetails', {
        url: '/agents/:agentId',
        templateUrl: 'app/agents/agentdetails.html',
        controller: 'AgentdetailsCtrl'
      });
  });