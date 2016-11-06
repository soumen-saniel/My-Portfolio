define(function(){

var app = angular.module("coreModule");

app.registerController("appController", ["appService", "logService", function (appService, logService){
	//-----------------------------------------------------------------------------------------------
	//Values for hero section
	//-----------------------------------------------------------------------------------------------
	var ctrl = this;
	ctrl.title = 'Require is working';
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
		services : [
			{
				title : "Web Designing",
				image : "/image/icons/services/designing.svg",
				link : ""
			},
			{
				title : "Front End Development",
				image : "/image/icons/services/html.svg",
				link : ""
			},
			{
				title : "End to End Development",
				image : "/image/icons/services/www.svg",
				link : ""
			},
			{
				title : "Manual and Automated Testing",
				image : "/image/icons/services/tools.svg",
				link : ""
			},
		]
	}
	//-----------------------------------------------------------------------------------------------
	//Values for portfolio section
	//-----------------------------------------------------------------------------------------------
	ctrl.portfolioSection = {
		projects : [
			{
				title : "Project 1",
				overview : "Project 1, dummy project",
				technology : ["Angular JS", "Foundation","JQuery"],
				url : "",
				category : "UI Development",
				date : "28/10/2016",
				client : "Client 1",
				role : "Developer",
				complete : true,
				images : [
					{
						title : "primary",
						image : "/image/dummy.png",
						description : "primary",
						primary : true
					},
					{
						title : "secondary 1",
						image : "/image/dummy.png",
						description : "secondary 1",
						primary : false
					},
					{
						title : "secondary 2",
						image : "/image/dummy.png",
						description : "secondary 2",
						primary : false
					}
				]
			},
			{
				title : "Project 2",
				overview : "Project 2, dummy project",
				technology : ["Angular JS", "Foundation","JQuery"],
				url : "",
				category : "UI Development",
				date : "29/10/2016",
				client : "Client 2",
				role : "Developer",
				complete : false,
				images : [
					{
						title : "primary",
						image : "/image/dummy.png",
						description : "primary",
						primary : true
					},
					{
						title : "secondary 1",
						image : "/image/dummy.png",
						description : "secondary 1",
						primary : false
					},
					{
						title : "secondary 2",
						image : "/image/dummy.png",
						description : "secondary 2",
						primary : false
					}
				]
			}
		]
	}
	//-----------------------------------------------------------------------------------------------
	//Values for about section
	//-----------------------------------------------------------------------------------------------
	ctrl.aboutSection = {
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
		sections : [
			{
				title : "About me",
				image : "/image/icons/about/webdesign.svg",
				components : [
					{
						title : "Birth day",
						content : "19th June 1992"
					},
					{
						title : "Nationality",
						content : "Indian"
					},
					{
						title : "Languages known",
						content : "English, Hindi, Bengali"
					}
				]
			},
			{
				title : "Interests",
				image : "/image/icons/about/javascript.svg",
				components : [
					{
						title : "",
						content : "Web design and development"
					},
					{
						title : "",
						content : "Learning new web related technologies and trends"
					},
					{
						tile : "",
						content : "Electronics and IOT"
					}
				]
			},
			{
				title : "Hobbies",
				image : "/image/icons/about/headphone.svg",
				components : [
					{
						title : "",
						content : "Playing guiter"
					},
					{
						title : "",
						content : "Listning music"
					}
				]
			}
		]
	}
	//-----------------------------------------------------------------------------------------------
	//Values for skills section
	//-----------------------------------------------------------------------------------------------
	ctrl.skillsSection = {
		skills : [
			{
				category : "BASICS",
				skills : [
					{
						title : "HTML5",
						percentage : "80"
					},
					{
						title : "CSS3",
						percentage : "90"
					},
					{
						title : "Java Script",
						percentage : "70"
					},
				]
			},
			{
				category : "CSS FRAMEWORKS",
				skills : [
					{
						title : "Bootstrap",
						percentage : "80"
					},
					{
						title : "Foundation",
						percentage : "90"
					},
					{
						title : "Angular Materials",
						percentage : "70"
					},
				]
			},
			{
				category : "JAVA SCRIPT FRAMEWORKS",
				skills : [
					{
						title : "JQuery",
						percentage : "80"
					}
				]
			}
		]
	}
	//-----------------------------------------------------------------------------------------------
	//Values for experience section
	//-----------------------------------------------------------------------------------------------
	ctrl.experienceSection = {
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
		experiences : [
			{
				company : "Company 1",
				role : "role 1",
				start : "",
				end : "",
				description : "description 1"
			},
			{
				company : "Company 2",
				role : "role 2",
				start : "",
				end : "",
				description : "description 1"
			},
			{
				company : "Company 3",
				role : "role 3",
				start : "",
				end : "",
				description : "description 3"
			}
		]
	}
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
					image : "/image/icons/social/facebook.svg"
				},
				{
					title : "github",
					url : "",
					image : "/image/icons/social/github.svg"
				},
				{
					title : "linkedin",
					url : "",
					image : "/image/icons/social/linkedin.svg"
				},
				{
					title : "skype",
					url : "",
					image : "/image/icons/social/skype.svg"
				}
			]
		}
	}
}]);

});