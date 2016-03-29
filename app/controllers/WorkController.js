module.exports = function($scope) {
	//add work here
	//maybe generate a .JSON file to have this continually update?
	//possible use of $http?
	$scope.mainMessage = 'My Work';
	$scope.subtitleMessage = "Here's a sample of my work";
	//$scope.data = $http.get('/url', config).then(httpSccess, httpError);

	$scope.httpSccess = function(data) {
		console.log(data);
	};

	$scope.httpError = function(response) {
		console.log(response);
	};
};