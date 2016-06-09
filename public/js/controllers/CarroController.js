app.controller("CarroController", ['$scope', 'broadcast', 
'$routeParams', function($scope, broadcast, $routeParams) {
    broadcast.getCarro($routeParams.id_Carro)
    .then(function(response) {
        $scope.carros = response[0]; //response[$routeParams.id];
    }),

    $scope.createCarro = function() {
    	broadcast.saveCarro($scope.dados).then(function(response) {
    		$scope.resposta = response;
    	});
    }
}]);