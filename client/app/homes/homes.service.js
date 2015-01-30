'use strict';

angular.module('waijuyiApp')
  .factory('homes', function($http){
    return {
      list: function (callback){
        $http({
          method: 'GET',
          url: '/api/homes',
          cache: true
        }).success(callback);
      },
      find: function(id, callback){
        $http({
          method: 'GET',
          url: '/api/homes/' + id,
          cache: true
        }).success(callback);
      }
    };
  });
