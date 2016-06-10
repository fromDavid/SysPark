app.controller("CarroController", ['$scope', 'broadcast', '$routeParams', 
	function($scope, broadcast, $routeParams) {
	    broadcast.getCarro().then(function(response) {
	        $scope.carros = response;
    }),
//AINDA EM TESTES
	function($scope, broadcast, $routeParams) {
	    broadcast.getCarro($routeParams.id_Carro).then(function(response) {
	        $scope.carros = response[0];
    	});
    },    
//
    $scope.createCarro = function() {
    	broadcast.saveCarro($scope.dados).then(function(response) {
    		$scope.resposta = response;
    	});
    }
}]);