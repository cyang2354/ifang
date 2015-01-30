'use strict';

angular.module('waijuyiApp')
  .factory('agents', function($http){
    return {
      list: function (callback){
        $http({
          method: 'GET',
          url: '/api/agents',
          cache: true
        }).success(callback);
      },
      find: function(id, callback){
        $http({
          method: 'GET',
          url: '/api/agents/' + id,
          cache: true
        }).success(callback);
      }
    };
  });
