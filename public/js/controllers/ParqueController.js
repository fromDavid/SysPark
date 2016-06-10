app.controller("ParqueController", ['$scope', 'broadcast', 
'$routeParams', function($scope, broadcast, $routeParams) {
    broadcast.getParque($routeParams.id)
    .then(function(response) {
        $scope.parques = response[0]; //response[$routeParams.id];
    }),

     $scope.carros = function(index) {
            broadcast.getCarro().then(function(response){
                $scope.carros = response[0];
            })
    },

    $scope.createParque = function() {
    	broadcast.saveParque($scope.dados).then(function(response) {
    		$scope.resposta = response;
    	});
    }
}]);