require('angular');
//import modules here
var MainController = require('./controllers/MainController');
var WorkController = require('./controllers/WorkController');
var WorkDetailController = require('./controllers/WorkDetailController');


var app = angular.module('app', [require('angular-route')]);
app.controller('MainController', ['$scope', MainController]);
app.controller('WorkController', ['$scope', WorkController]);
app.controller('WorkDetailController', ['$scope', WorkDetailController]);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		}).
		when('/work', {
			templateUrl: 'partials/work.html',
			controller: 'WorkController'
		}).
		when('/about:workId', {
			templateUrl: 'partials/work-detail.html',
			controller: 'WorkDetailController'
		}).
		otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);
	}]);