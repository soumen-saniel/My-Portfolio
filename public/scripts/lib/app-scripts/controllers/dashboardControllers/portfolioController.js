define(function(){
	var app = angular.module("coreModule");
	app.controller('portfolioController',["appService", "logService", portfolioController]);
	function portfolioController(appService, logService){
		var ctrl = this;
	}
});