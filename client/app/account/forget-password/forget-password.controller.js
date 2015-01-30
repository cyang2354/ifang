'use strict';

angular.module('waijuyiApp')
  .controller('ForgetPasswordCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};
	$scope.sucess = false;
	$scope.sucessMessage = {};

    $scope.forgetPassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.forgetPassword({
          email: $scope.user.email,
        })
        .then( function() {
          // Account created, redirect to home
		  $scope.sucess = true;
		  $scope.sucessMessage = '重置密码申请提交成功,请查看您验证的邮箱或手机获取临时登录密码';
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
