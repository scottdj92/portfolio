module.exports = function($scope) {
	$scope.message = "Hi I'm Scott Jones";
	$scope.subtitle = "I'm an interactive developer.";
	$scope.mainMessage = 'Work';
	$scope.subtitleMessage = 'Some of my work';
	$scope.contactLine = "I'm Scott, but you can call me";
	$scope.contactHook = 'anytime.';

	$scope.aboutHook = 'Who am I?';

	$scope.skills = [
	  {
	    "name": "Backbone.js",
	    "src": "http://backbonejs.org/"
	  },
	  {
	  	"name": "Angular.js",
	  	"src": "http://angularjs.org"
	  },
	  {
	  	"name": "Adobe Creative Suite",
	  	"src": "http://www.adobe.com/creativecloud.html"
	  },
	  {
	  	"name": "WordPress",
	  	"src": ""
	  },
	  {
	  	"name": "HTML5"
	  },
	  {
	  	"name": "CSS3"
	  },
	  {
	  	"name": "Guitar"
	  }
	];

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