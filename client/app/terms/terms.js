'use strict';

angular.module('waijuyiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('terms', {
        url: '/terms',
        templateUrl: 'app/terms/terms.html',
        controller: 'TermsCtrl'
      });
  });