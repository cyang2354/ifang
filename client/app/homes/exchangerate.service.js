'use strict';

angular.module('waijuyiApp')
 .factory('currencyConverter', ['$http', function($http) {
  var YAHOO_FINANCE_URL_PATTERN =
        '//query.yahooapis.com/v1/public/yql?q=select * from '+
        'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
        'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
  var currencies = ['USD', 'EUR', 'CNY'];
  var usdToForeignRates = {};

  var convert = function (amount, inCurr, outCurr) {
    return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
  };

  var refresh = function() {
    var url = YAHOO_FINANCE_URL_PATTERN.
               replace('PAIRS', 'USD' + currencies.join('","USD'));
    return $http.jsonp(url).success(function(data) {
			var newUsdToForeignRates = {};
			angular.forEach(data.query.results.rate, function(rate) {
				var currency = rate.id.substring(3,6);
				newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);
			});
			if(newUsdToForeignRates.CNY === null || newUsdToForeignRates.CNY < 5 || newUsdToForeignRates.CNY > 8){
				newUsdToForeignRates.CNY = 6.2;
			}
			usdToForeignRates = newUsdToForeignRates;
			})
			.error(function(){
				var newUsdToForeignRates = {};
				newUsdToForeignRates.USD = 1;
				newUsdToForeignRates.CNY = 6.2;
			});
  };

  refresh();

  return {
    currencies: currencies,
    convert: convert,
    refresh: refresh
  };
}]);