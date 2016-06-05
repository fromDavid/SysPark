app.controller("MainController", ['$scope', 'broadcast', 
	function($scope, broadcast) {
		broadcast.getParks().then(function(response) {
			$scope.parks = response;
		});

	$scope.delete = function(index) {
        $scope.loading = true;
 
        var todo = $scope.parks[index];
 
        $http.delete('/api/v1/parks/')
            .success(function() {
                $scope.parks.splice(index, 1);
                    $scope.loading = false;
 
            });
    };
}]);