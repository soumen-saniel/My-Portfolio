define(function(){

var app = angular.module("coreModule");

app.factory('appService', ['$http', function($http){
	return {
		get : function(url){
			return $http.get(url);
		}
	};
}])

});