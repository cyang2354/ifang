'use strict';


angular.module('waijuyiApp')
  .controller('AgentdetailsCtrl', function ($scope, agents, $location) {
    //agents.list(function(agents) {
    //  $scope.agent = agents[0];
    //});
	
	//$scope.agent2 = $location.path().substring(8);
	var id = $location.path().substring(8);
	agents.find(id, function(agent) {
      $scope.agent = agent;
    });
    
    // Check the phone input
    $scope.checkPhone = function () {
      var phoneNum = $scope.user.phone;
      var countryCode = $scope.user.country;
      $scope.form.phone.$error.invalid = ((phoneNum.match(/\d/g).length !== 10 && countryCode === 'US') ||
                                          (phoneNum.match(/\d/g).length !== 11 && countryCode === 'China')) ||
                                          (phoneNum.match(/^[0-9]+$/) === null);
    };
    
    // Check the verification answer
    $scope.checkVerification = function() {
      $scope.form.verification.$error.invalid = $scope.user.verification !== 'waijuyi';
    };
    
    // Check the email input
    $scope.checkEmail = function () {
      console.log($scope.user.email);
      var emailAddr = $scope.user.email;
      if(!emailAddr || emailAddr.length === 0)
      {
        $scope.form.email.$error.invalid = false;
        return;
      }
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      $scope.form.email.$error.invalid = !re.test(emailAddr);
    };
  
  });