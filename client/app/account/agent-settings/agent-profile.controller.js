'use strict';

angular.module('waijuyiApp')
  .controller('AgentProfileCtrl', function ($scope, $filter, User, Auth) {
    $scope.errors = {};

	$scope.getCurrentUser = Auth.getCurrentUser;
	
	$scope.profile = $scope.getCurrentUser();
	
    $scope.updateprofile = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.updateprofile( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
	};
	
	
	//About license year and career year
	$scope.date = new Date();
    $scope.year = $filter('date')($scope.date,'yyyy');
	//$scope.profile.licenseYear = 2015;
	
	
	$scope.getCareerYear = function(){
		return parseInt($scope.year) - parseInt($scope.profile.licenseYear);
	};
	
	
	//About recent sales
	
	$scope.recentSales = [{id: '1'}];

	$scope.addNewChoice = function() {
		var newItemNo = $scope.recentSales.length+1;
		$scope.recentSales.push({'id':newItemNo});
	};
		
	$scope.recentSaleInput = function () {
		if( $scope.recentSales[0].year===undefined || $scope.recentSales[0].sales===undefined){
			return false;
		}	
		return true;
    };
	
	$scope.duplicateYear = function () {
		var sum=[];
		
		for(var i=0; i<$scope.recentSales.length; i++){
			if (sum.indexOf( $scope.recentSales[i].year ) < 0){
				sum.push( $scope.recentSales[i].year);
			}
			else{
				return false;
			}
		}
		return true;
    };
	
	
	//About language speak
    $scope.selectedLanguages = {};
	
	if($scope.profile.EnglishSpeak==='1'){	
		$scope.selectedLanguages['英语']=true;
	}
	else{
		$scope.selectedLanguages['英语']=false;
	}
	if($scope.profile.mandarinLanguages==='1'){	
		$scope.selectedLanguages['普通话']=true;
	}
	else{
		$scope.selectedLanguages['普通话']=false;
	}
	if($scope.profile.cantoneseLanguages==='1'){	
		$scope.selectedLanguages['粤语']=true;
	}
	else{
		$scope.selectedLanguages['粤语']=false;
	}
    
    $scope.languages = [{'name':'英语', 'id':1}, {'name':'普通话', 'id':2}, {'name':'粤语', 'id':3}];
    
    $scope.someSelected = function (object) {
      return Object.keys(object).some(function (key) {
        return object[key];
      });
    };
	
	
	//form validation patterns
    $scope.phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	
	$scope.numberPattern = /^\d+$/;
	
	
  });
