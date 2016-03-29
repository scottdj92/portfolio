module.exports = function($scope) {
	$scope.message = "Hi I'm Scott Jones";
	$scope.subtitle = "I'm an interactive developer.";
	$scope.mainMessage = 'Work';
	$scope.subtitleMessage = 'Some of my work';
	$scope.contactLine = "I'm Scott, but you can call me";
	$scope.contactHook = 'anytime.';

	$scope.aboutHook = 'Who am I?';
	$scope.bio = '';

	$scope.skills = [
	  {
	    "name": "Backbone.js",
	    "src": "https://upload.wikimedia.org/wikipedia/commons/2/20/Backbone.js_logo.svg"
	  },
	  {
	  	"name": "Angular.js",
	  	"src": "https://raw.githubusercontent.com/angular/angular.js/master/images/logo/AngularJS-Shield.exports/AngularJS-Shield-small.png"
	  },
	  {
	  	"name": "Adobe Creative Suite",
	  	"src": "https://worldvectorlogo.com/logos/creative-cloud-cc.svg"
	  },
	  {
	  	"name": "WordPress",
	  	"src": ""
	  },
	  {
	  	"name": "",
	  	"src": ""
	  }
	]

	$scope.master = {};

	$scope.reset = function(form) {
		if (form) {
			form.$setPristine();
			form.$setUntouched();
		}
	};

	$scope.send = function(user) {
		//$http request for email to me
	};
};