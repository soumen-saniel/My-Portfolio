define(function(){
	var app = angular.module("coreModule");
	app.registerController("landingController", ["appService", "logService", landingController]);
	function landingController(appService, logService){
		var ctrl = this;
		ctrl.heroSection = {
			slides : []
		}
		appService.get('/api/hero').then(
	        function(response) {
	        	ctrl.heroSection = {
					slides : response.data
				}
	            logService.success('appService.get()', response);
	        }, 
	        function(response) {
	            logService.failed('appService.get()', response);
	        }
	    );
	}
});