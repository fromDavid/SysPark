app.controller("CarroController", ['$scope', 'broadcast', '$routeParams', 
	function($scope, broadcast, $routeParams) {
	    broadcast.getCarro().then(function(response) {
	        $scope.carros = response;
    }),
        
    $scope.createCarro = function() {
    	broadcast.saveCarro($scope.carros).then(function(response) {
    		$scope.resposta = response;
    	});
    }
}]);