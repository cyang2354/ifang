'use strict';

angular.module('waijuyiApp')
  .controller('HomedetailsCtrl', function ($scope, $stateParams, homes, agents, currencyConverter){
	 
	homes.find($stateParams.homeId, function(home) {
		$scope.home = home;

		// populate data for Galleria slider
		var slides = {};
		slides.index = {};
		slides.index.image = home.wjyImageUrls[0];
		slides.index.thumb = home.wjyImageUrls[0];

		slides.images = [];

		for (var i = 0; i < home.wjyImageUrls.length; i++) {
			var homeImage = {};
			homeImage.image = home.wjyImageUrls[i];
			homeImage.thumb = home.wjyImageUrls[i];
			slides.images.push(homeImage);
		}

		$scope.slides = slides;
	});

	$scope.agents =  {};

	agents.list(function(agents) {
		var length = agents.length;
		var num1 = Math.floor(Math.random() * length);
		var num2 = num1;
		var num3 = num1;
		while(num2===num1){	
			num2 = Math.floor(Math.random() * length);
		}
		while(num3===num1 || num3===num2){
			num3 = Math.floor(Math.random() * length);
		}
			
		$scope.agents[0] = agents[num1];
		$scope.agents[1] = agents[num2];
		$scope.agents[2] = agents[num3];
	});

	var inCurr = 'USD';
	var outCurr = 'CNY';

	$scope.RMBPrice = function getRMBPrice(listPrice) {
		var price = currencyConverter.convert(listPrice, inCurr, outCurr);

		return price;
	};
	
	
	//translation
	var dictionary = {
		number:　{	
			'1':'一', 
			'2':'二',
			'3':'三',
			'4':'四',
			'5':'五',
			'6':'六',
			'7':'七',
			'8':'八',
			'9':'九',
			'0':'零'
		},
		
		type:　{	
			'SFR':'独栋别墅', 
			'COM':'公寓',
			'CND':'公寓',
			'RI':'住宅',
			'RNT':'出租房屋',
		}	
	};
	$scope.dict = dictionary;
	
});