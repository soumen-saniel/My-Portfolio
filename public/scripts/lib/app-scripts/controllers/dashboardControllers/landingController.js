define(function(){
	var app = angular.module("coreModule");
	app.registerController("landingController", ["$scope", "appService", "logService", landingController]);
	function landingController($scope, appService, logService){

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
	        function(err) {
	            logService.failed('appService.get()', err);
	        }
	    );
	    ctrl.addNew = function(){
	    	ctrl.heroSection.slides.push({
	    		image : "/image/dummy.png",
	    		text : ""
	    	});
	    }
	    ctrl.save = function(data){
	    	appService.post('/api/hero', data).then(
	    		function(response){
	    			logService.success('appService.post()', response);
	    		},function(err){
	    			logService.failed('appService.post()', err);
	    		}
    		);
	    }
	    ctrl.remove = function(data){
	    	if(data._id){
	    		console.log(data);
	    		appService.delete('/api/hero', data).then(
		    		function(response){
		    			logService.success('appService.delete()', response);
		    		},function(err){
		    			logService.failed('appService.delete()', err);
		    		}
	    		);
	    	}else{
	    		var index = ctrl.heroSection.slides.indexOf(data);
	    		ctrl.heroSection.slides.splice(index, 1);
	    	}
	    }  
	}
});