(function(){

var app = angular.module("appModule");

app.factory('appService', ['$http', function($http){
	return {
		get : function(url){
			return $http.get(url);
		}
	};
}])

})();