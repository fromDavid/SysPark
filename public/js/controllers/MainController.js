app.controller("MainController", ['$scope', 'broadcast', '$route', 
	function($scope, broadcast, $route) {
		broadcast.getParque().then(function(response){
            $scope.parques = response;
		}),
        
        $scope.delete = function(index) {
            broadcast.deleteParque(index).then(function(response) {
                $scope.parques = response;
                broadcast.getParque().then(function(response){
            		$scope.parques = response;
				})
            });
        }
}]);