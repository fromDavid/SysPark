app.controller("MainController", ['$scope', 'broadcast', 
	function($scope, broadcast) {
		broadcast.getAuths().then(function(response) {
			$scope.auths = response;
		});
}]);