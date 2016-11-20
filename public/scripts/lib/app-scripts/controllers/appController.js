define(function(){

var app = angular.module("coreModule");

app.registerController("appController", ["appService", "logService", function (appService, logService){
	//-----------------------------------------------------------------------------------------------
	//Values for hero section
	//-----------------------------------------------------------------------------------------------
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
	//-----------------------------------------------------------------------------------------------
	//Values for services section
	//-----------------------------------------------------------------------------------------------
	ctrl.servicesSection = {
		services : []
	}
	appService.get("/api/service").then(
        function(response) {
        	ctrl.servicesSection.services = response.data;
        	logService.success('appService.get()', response);
        }, 
        function(err) {
            logService.failed('appService.get()', err);
        }
    );
	//-----------------------------------------------------------------------------------------------
	//Values for portfolio section
	//-----------------------------------------------------------------------------------------------
	ctrl.portfolioSection = {
		projects : []
	}
	appService.get("/api/portfolio/main").then(
        function(response) {
        	ctrl.portfolioSection.projects = response.data;
        	logService.success('appService.get()', response);
        }, 
        function(err) {
            logService.failed('appService.get()', err);
        }
    );
	
	//-----------------------------------------------------------------------------------------------
	//Values for about section
	//-----------------------------------------------------------------------------------------------
	ctrl.aboutSection = {
		data : []
	}
	appService.get('/api/about').then(
        function(response) {
        	ctrl.aboutSection.data = response.data[0];
        	logService.success('appService.get()', response);
        }, 
        function(err) {
            logService.failed('appService.get()', err);
        }
    );
	//-----------------------------------------------------------------------------------------------
	//Values for skills section
	//-----------------------------------------------------------------------------------------------
	ctrl.skillsSection = {
		skills : []
	}
	appService.get('/api/skill').then(
        function(response) {
        	ctrl.skillsSection.skills = response.data;
        	logService.success('appService.get()', response);
        }, 
        function(err) {
            logService.failed('appService.get()', err);
        }
    );
	//-----------------------------------------------------------------------------------------------
	//Values for experience section
	//-----------------------------------------------------------------------------------------------
	ctrl.experienceSection = {
		experiences : []
	}
	appService.get('/api/experience').then(
        function(response) {
        	var data = [];
        	angular.forEach(response.data, function (val, key){
        		if(val.start)
					val.start = new Date(val.start);
				if(val.end)
					val.end = new Date(val.end);
        		data.push(val);
        	})
        	ctrl.experienceSection.experiences = data;
        	logService.success('appService.get()', response);
        }, 
        function(err) {
            logService.failed('appService.get()', err);
        }
    );
	//-----------------------------------------------------------------------------------------------
	//Values for contact section
	//-----------------------------------------------------------------------------------------------
	ctrl.contactSection = {
		contact : {
			address : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
			phone : "+91 9876543212",
			email : "patric.jane@xyz.com",
			social : [
				{
					title : "facebook",
					url : "",
					image : "/img/icons/social/facebook.svg"
				},
				{
					title : "github",
					url : "",
					image : "/img/icons/social/github.svg"
				},
				{
					title : "linkedin",
					url : "",
					image : "/img/icons/social/linkedin.svg"
				},
				{
					title : "skype",
					url : "",
					image : "/img/icons/social/skype.svg"
				}
			]
		}
	}
}]);

});