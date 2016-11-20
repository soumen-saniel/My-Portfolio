define(function(){
	var app = angular.module("coreModule");
	app.registerController("contactController", ["appService", "logService", contactController]);
	function contactController(appService, logService){
		//-----------------------------------------------------------------------------------------------
		//Veriables
		//-----------------------------------------------------------------------------------------------
		var ctrl = this;
		ctrl.contact = {
			address : "",
			phone : "",
			mail : ""
		};
		ctrl.socialNetworks = [];
		var dummyDocument = {
			url : "",
			image : "/img/dummy.jpg"
		}
		//-----------------------------------------------------------------------------------------------
		//Configuration
		//-----------------------------------------------------------------------------------------------
		ctrl.url = {
			contactdb : '/api/contact',
			socialdb : '/api/social',
			fs : '/api/social/img'
		}
		ctrl.fsDir = '/img/social/';
		//-----------------------------------------------------------------------------------------------
		//Initial get
		//-----------------------------------------------------------------------------------------------
		appService.get(ctrl.url.contactdb).then(
			function (response){
				if(response.data.length > 0)
					ctrl.socialNetworks = response.data[0];
			},
			function (err) {
	        	alert("Error : Data get!");
	            logService.failed('appService.get()', err);
	        }
		);
		appService.get(ctrl.url.socialdb).then(
			function (respose){
				ctrl.socilNetworks = [];
				if(response.data.length > 0)
					deleteResourcesOnLoad(response.data);
			},
			function (err) {
	        	alert("Error : Data get!");
	            logService.failed('appService.get()', err);
	        }
		);
		//-----------------------------------------------------------------------------------------------
		//Generic functions
		//-----------------------------------------------------------------------------------------------
	}
});