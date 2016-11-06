define(function(){

var app = angular.module("coreModule");

app.factory('appService', ['$http', function($http){
	return {
		get : function(url){
			return $http.get(url);
		},
		post : function(url, data){
			return $http.post(url, data);
		},
		delete: function(url, data) {
            return $http.delete(url, data);
        }
	};
}])

});