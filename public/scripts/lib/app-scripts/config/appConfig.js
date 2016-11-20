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
		    		controller: 'serviceController as main',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/dashboardControllers/serviceController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		},
		    		authenticate: true
		    	})
		    	.state('admin.portfolio',{
		    		url:'/portfolio',
		    		templateUrl : '/views/dashboardViews/portfolio.html',
		    		controller: 'portfolioController as main',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/dashboardControllers/portfolioController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		},
		    		authenticate: true
		    	})
		    	.state('admin.about',{
		    		url:'/about',
		    		templateUrl : '/views/dashboardViews/about.html',
		    		controller: 'aboutController as main',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/dashboardControllers/aboutController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		},
		    		authenticate: true
		    	})
		    	.state('admin.skills',{
		    		url:'/skills',
		    		templateUrl : '/views/dashboardViews/skills.html',
		    		controller: 'skillController as main',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/dashboardControllers/skillController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		},
		    		authenticate: true
		    	})
		    	.state('admin.experience',{
		    		url:'/experience',
		    		templateUrl : '/views/dashboardViews/experience.html',
		    		controller: 'experienceController as main',
		    		resolve: {
		    			load: ['$q', function($q){
		    				var defered = $q.defer();
		    				require(['lib/app-scripts/controllers/dashboardControllers/experienceController'], function(){
		    					defered.resolve();
		    				});
		    				return defered.promise;
		    			}]
		    		},
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