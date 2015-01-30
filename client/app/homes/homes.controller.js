'use strict';

angular.module('waijuyiApp')
  .controller('HomesCtrl', function ($scope, homes, currencyConverter) {
    homes.list(function(homes) {
      $scope.homes = homes;
    });

	//default sorting
	$scope.sortRadio = 'featured';
	
	//RMB convertor
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
