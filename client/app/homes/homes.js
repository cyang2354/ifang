'use strict';

angular.module('waijuyiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('homes', {
        url: '/homes',
        templateUrl: 'app/homes/homes.html',
        controller: 'HomesCtrl'
      })
      .state('homedetails', {
        url: '/homes/:homeId',
        templateUrl: 'app/homes/homedetails.html',
        controller: 'HomedetailsCtrl'
      });
  });