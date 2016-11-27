define(function(){
	var app = angular.module("coreModule");
	app.registerController("cvController", ["appService", "logService", cvController]);
	function cvController(appService, logService){
		var ctrl = this;
		ctrl.skills = [
			{
				skill : 'HTML5',
				percentage : '80'
			},
			{
				skill : 'CSS3',
				percentage : '70'
			},
			{
				skill : 'JAVA SCRIPT',
				percentage : '70'
			}
		]
	}
});