app.controller("MainController", ['$scope', 'broadcast', 
	function($scope, broadcast) {
		broadcast.getParks().then(function(response) {
			$scope.parks = response;
		});
}]);