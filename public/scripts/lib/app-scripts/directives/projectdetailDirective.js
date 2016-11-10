define(['jquery', 'foundation'], function ($, Foundation) {
	var app = angular.module("coreModule");
	app.directive("projectdetailDirective", [function () {
		return {
			restrict: 'E',
			scope : {
				project : "="
			},
			templateUrl : "/views/homeViews/projectdetail.html",
			link: function (scope, element, attrs) {
				angular.element(element).ready(function(){
					scope.learnMore = false;
					scope.toggle = function(){
						scope.learnMore = !scope.learnMore;
					}
				});
			}
		};
	}])
})