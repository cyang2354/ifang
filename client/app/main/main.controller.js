'use strict';

angular.module('waijuyiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.cities = [
      {
        name : '西雅图',
        info : 'Emerald city, Microsoft, Amazon, Bill Gates'
      }
    ];

    $scope.upcomingCities = [
      {
        name : '旧金山',
        info : 'Golden Gate, Sillicon Vally, Google, Facebook, Apple'
      },
      {
        name : '洛杉矶',
        info : 'City of angels, Hollywood, Lakers, Southern California sunshine'
      },
      {
        name : '纽约',
        info : 'Big Apple, Wall Street, Times Square'
      },
      {
        name : '波士顿',
        info : 'Harvard, MIT, history, lobsters'
      },
      {
        name : '休斯顿',
        info : 'Texus, Rockets, oil'
      },
      {
        name : '圣地亚哥',
        info : 'Sunshine, beach, Disney'
      },
      {
        name : '华盛顿特区',
        info : 'Captial, White House.'
      },
      {
        name : '芝加哥',
        info : 'Windy City, Great Lakes, Bulls'
      },
      {
        name : '费城',
        info : 'History'
      }
    ];
  });
