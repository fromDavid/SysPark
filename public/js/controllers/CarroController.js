app.controller("CarroController", ['$scope', 'broadcast', '$routeParams', '$route',
	function($scope, broadcast, $routeParams, $route) {
	    broadcast.getCarro().then(function(response) {
	        $scope.carros = response;
    }),
        
    $scope.createCarro = function() {
    	broadcast.saveCarro($scope.dados).then(function(response) {
    		console.log(response);
    		$scope.dados = response;
            broadcast.getCarro().then(function(response) {
                $scope.carros = response;
            })
    	});
    },

    $scope.createParque = function() {
        console.log($scope.dados);
        broadcast.saveParque($scope.dados).then(function(response) {
            $scope.dados = response;
            broadcast.getParque().then(function(response) {
                $scope.parques = response;
            })
        });
    },

    $scope.delete = function(index) {
        broadcast.deleteCarro(index).then(function(response) {
            $scope.carros = response;
            broadcast.getCarro().then(function(response) {
                $scope.carros = response;
            })
        })
    }
}]);