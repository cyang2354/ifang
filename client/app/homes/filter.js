'use strict';

angular.module('waijuyiApp')
 .filter('RMBcurrency', function() {
  return function(input) {
  
	var DECIMAL_SEP = '.';
	var fraction = ('' + input).split(DECIMAL_SEP);
    var whole = fraction[0];
	var showPrice;
	
	var wholeLength = whole.length;
	var tenthousand = whole.substring(0, wholeLength-4);
	
	var length = tenthousand.length;
	if(tenthousand.charAt(length-1)==='4'){	
		showPrice = tenthousand.substring(0, length-1) + '5';
	}
	else if(tenthousand.charAt(length-1)==='3'){	
		showPrice = tenthousand.substring(0, length-1) + '2';
	}
	else{
		showPrice = tenthousand;
	}
	
    return showPrice;
  };
});

angular.module('waijuyiApp')
 .filter('FirefoxCurrency', function() {
  return function(input) {
  
	var DECIMAL_SEP = '.';
	var fraction = ('' + input).split(DECIMAL_SEP);
    var whole = fraction[0];
	
    return whole;
  };
});