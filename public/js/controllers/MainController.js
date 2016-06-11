app.controller("MainController", ['$scope', 'broadcast', 
	function($scope, broadcast) {
		broadcast.getParque().then(function(response){
            $scope.parques = response;
		}),

		/*$scope.save = function(index) {
            broadcast.saveParque(index).then(function(response) {
                $scope.parques = response;
            })
        },
        
        $scope.delete = function(index) {
            broadcast.deleteParque(index).then(function(response) {
                $scope.parques = response;
            })
        },*/

        function($scope, broadcast, $routeParams) {
            broadcast.getCarro().then(function(response) {
                $scope.carros = response;
            }),

            $scope.createCarro = function() {
                broadcast.saveCarro($scope.dados).then(function(response) {
                    $scope.resposta = response;
                })
            }
        }
}]);