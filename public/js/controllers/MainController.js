app.controller("MainController", ['$scope', 'broadcast', 
	function($scope, broadcast) {
		broadcast.getPersons().then(function(response) {
			$scope.pessoas = response;
		});
}]);