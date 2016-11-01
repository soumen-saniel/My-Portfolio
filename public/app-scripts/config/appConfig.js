(function(){

	angular.module("appModule")
		.config(function($routeProvider) {
			$routeProvider
		        .when('/', {
		            controller: 'appController as main',
		            templateUrl: '../../views/home.html'
		        })
		        .when('/admin', {
		            controller: 'dashboardController as main',
		            templateUrl: '../../views/dashboard.html'
		        })
		        .otherwise( { redirectTo: '/' } );
		})
})();