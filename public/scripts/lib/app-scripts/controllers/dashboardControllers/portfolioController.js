define(function(){
	var app = angular.module("coreModule");
	app.controller('portfolioController',["appService", "logService", portfolioController]);
	function portfolioController(appService, logService){
		//-----------------------------------------------------------------------------------------------
		//Veriables
		//-----------------------------------------------------------------------------------------------
		var ctrl = this;
		ctrl.projects = [];
		var dummyDocumentMain = {
			name : "",
			overview : "",
			technology : [],
			url : "",
			category : "",
			date : new Date(),
			client : "",
			role : "",
			complete : false,
			image : ""
		}
		var dummyDocumentSub = {
			image : "",
			key : "",
			description : ""
		}
		//-----------------------------------------------------------------------------------------------
		//Configuration
		//-----------------------------------------------------------------------------------------------
		ctrl.url = {
			db : {
				main : "/api/portfolio/main",
				sub : "/api/portfolio/sub"
			},
			fs : '/api/portfolio/img'
		}
		ctrl.fsDir = '/img/project/';
		//-----------------------------------------------------------------------------------------------
		//Inetial get
		//-----------------------------------------------------------------------------------------------
		appService.get(ctrl.url.db.main).then(
	        function(response) {
	        	ctrl.projects = response;
	        }, 
	        function(err) {
	            //logService.failed('appService.get()', err);
	        }
	    );
	    //-----------------------------------------------------------------------------------------------
		//Helper functions
		//-----------------------------------------------------------------------------------------------
		ctrl.getUrl = function(name){
			return "/img/project/"+name;
		}
		function deleteResourcesOnLoad(value){
			var imgArr = [];
            angular.forEach(value, function (val, key){
            	val = val.image;
            	val = val.split("/");
            	val = val[val.length - 1];
            	imgArr.push(val);
            });
            angular.forEach(imgArr, function (val, key){
            	appService.delete(ctrl.url.fs, {file : imgArr}).then(
		    		function(response){
		    			//logService.success('appService.delete()', response);
		    		},function(err){
		    			//logService.failed('appService.delete()', err);
		    		}
	    		);
            })
		}
	}
});