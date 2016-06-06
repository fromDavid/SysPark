app.controller("MainController", ['$scope', 'broadcast', 
	function($scope, broadcast) {
		broadcast.getParque().then(function(response) {
			$scope.parques = response;
		});
}]);