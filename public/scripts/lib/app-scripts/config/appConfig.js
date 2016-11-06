define(function(){

	angular.module("coreModule")
		.config(function($routeProvider, $stateProvider, $urlRouterProvider) {
			//-----------------------------------------------------------------------------------------------
			//Angular ui router configuration
			//-----------------------------------------------------------------------------------------------
		    $urlRouterProvider.otherwise('/');
		    $stateProvider
		    	.state('home',{
		    		url: '/',
		    		templateUrl : '/views/home.html',
		    		controller: 'appController as main',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/appController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		}
		    	})
		    	.state('admin',{
		    		url:'/admin',
		    		templateUrl : '/views/dashboard.html',
		    		controller: 'dashboardController as dashboard',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/dashboardController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		},
		    		authenticate: true
		    	})
		    	.state('admin.landing',{
		    		url:'/landing',
		    		templateUrl : '/views/dashboardViews/landing.html',
		    		controller: 'landingController as main',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/dashboardControllers/landingController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		},
		    		authenticate: true
		    	})
		    	.state('admin.services',{
		    		url:'/services',
		    		templateUrl : '/views/dashboardViews/services.html',
		    		authenticate: true
		    	})
		    	.state('admin.portfolio',{
		    		url:'/portfolio',
		    		templateUrl : '/views/dashboardViews/portfolio.html',
		    		authenticate: true
		    	})
		    	.state('admin.about',{
		    		url:'/about',
		    		templateUrl : '/views/dashboardViews/about.html',
		    		authenticate: true
		    	})
		    	.state('admin.skills',{
		    		url:'/skills',
		    		templateUrl : '/views/dashboardViews/skills.html',
		    		authenticate: true
		    	})
		    	.state('admin.experience',{
		    		url:'/experience',
		    		templateUrl : '/views/dashboardViews/experience.html',
		    		authenticate: true
		    	})
		    	.state('admin.contact',{
		    		url:'/contact',
		    		templateUrl : '/views/dashboardViews/contact.html',
		    		authenticate: true
		    	})
		    	.state('admin.resources',{
		    		url:'/resources',
		    		templateUrl : '/views/dashboardViews/resources.html',
		    		authenticate: true
		    	})
		});
});