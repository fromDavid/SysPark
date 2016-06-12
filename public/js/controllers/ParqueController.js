app.controller("ParqueController", ['$scope', 'broadcast', 
'$routeParams', function($scope, broadcast, $routeParams) {
    broadcast.getParque($routeParams.id).then(function(response) {
        $scope.parques = response[0]; //response[$routeParams.id];
    }),
//AINDA EM TESTES
    function($scope, broadcast, $routeParams) {
        broadcast.getCarro().then(function(response){
            $scope.carros = response;
        });
    }
//
    $scope.createParque = function() {
    	broadcast.saveParque($scope.dados).then(function(response) {
    		$scope.resposta = response;
    	});
    }
}]);