define(function(){
	//Main module
	var coreModule = angular.module("coreModule", ["angular.filter", "ngRoute", "ngFileUpload", "ui.router"]);
	//Lazy loading of controllers
	coreModule.config(['$controllerProvider', function($controllerProvider){
		coreModule.registerController = $controllerProvider.register;
	}])
	//Loading all angular components defined in appReferences file
	require(['lib/app-scripts/appReferences'], function(references) {
		require(references, function(){
			//Bootstraping angular to the document
			angular.bootstrap(document, ["coreModule"]);
		});
	});

});