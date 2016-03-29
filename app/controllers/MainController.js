module.exports = function($scope) {
	$scope.message = "Hi I'm Scott Jones";
	$scope.subtitle = "I'm an interactive developer.";
	$scope.mainMessage = 'Work';
	$scope.subtitleMessage = 'Some of my work';
	$scope.contactLine = "I'm Scott, but you can call me";
	$scope.contactHook = 'anytime.';

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