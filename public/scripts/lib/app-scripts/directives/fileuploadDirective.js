define(function(){
	var app = angular.module("coreModule");
	app.directive("fileuploadDirective", ["Upload","$window","$timeout","logService", function(Upload, $window, $timeout, logService){
		return{
			restrict : "AE",

			scope : {
				"data" : "=",
				"url" : "@",
				"path" : "@",
			},

			template : "<div ngf-drop ngf-select ng-model='files'"+
            "ngf-drag-over-class='dragover' ngf-multiple='true' ngf-allow-dir='true'"+
            "accept={{accept}} ngf-pattern={{pattern}}><img ng-src={{image}}>"+
            "<div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div></div>",

			link : function (scope, element, attrs) {
				angular.element(element).ready(function(){
					scope.image = scope.data;
					scope.files = "";
					scope.file = "";
					scope.accept = "image/*,application/pdf";
					scope.pattern = "'image/*,application/pdf'";

					scope.$watch(function () {
			            return scope.files;
			        }, function(value){
			            scope.upload(value);
			        });

			        scope.$watch('file', function () {
			            return scope.file;
			        }, function(value){
			            if (value != null) {
			                scope.files = [value]; 
			            }
			        });

			        scope.log = '';

			        scope.upload = function (files, data) {
			            if (files && files.length) {
			                for (var i = 0; i < files.length; i++) {
			                    var file = files[i];
			                    if (!file.$error) {
			                        Upload.upload({
			                            url: scope.url, //webAPI exposed to upload the file,
			                            data: {
			                                username: scope.username,
			                                file: file  
			                            }
			                        }).then(function (resp) {

			                            $timeout(function() {
			                            	
			                                var log = 'file: ' +
			                                resp.config.data.file.name +
			                                ', Response: ' + JSON.stringify(resp.data) ;
			                                console.log(log);

			                                scope.image = scope.path + resp.config.data.file.name;
			                                scope.data = scope.image;
			                                
			                            });
			                        }, null, function (evt) {
			                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			                            scope.log = 'progress: ' + progressPercentage + '% ' + evt.config.data.file.name + '\n' + scope.log;
			                        });
			                    }
			                }
			            }
			        }
				});
			}
		}
	}]);
});