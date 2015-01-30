'use strict';

angular.module('waijuyiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('agent-signup', {
        url: '/agent-signup',
        templateUrl: 'app/account/agent-signup/agent-signup.html',
        controller: 'AgentSignupCtrl'
      })
	  .state('agent-activate', {
        url: '/agent-activate',
        templateUrl: 'app/account/agent-activate/agent-activate.html',
        controller: 'AgentActivateCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
	  .state('forget-password', {
        url: '/forget-password',
        templateUrl: 'app/account/forget-password/forget-password.html',
        controller: 'ForgetPasswordCtrl'
      })
	  .state('agent-profile', {
        url: '/agent-profile',
        templateUrl: 'app/account/agent-settings/agent-profile.html',
        controller: 'AgentProfileCtrl'
      })
	  .state('user-profile', {
        url: '/user-profile',
        templateUrl: 'app/account/user-settings/user-profile.html',
        controller: 'UserProfileCtrl'
      })
	  .state('agent-change-password', {
        url: '/agent-change-password',
        templateUrl: 'app/account/agent-settings/agent-change-password.html',
        controller: 'AgentChangePasswordCtrl'
      })
	  .state('user-change-password', {
        url: '/user-change-password',
        templateUrl: 'app/account/user-settings/user-change-password.html',
        controller: 'UserChangePasswordCtrl'
      });
  });