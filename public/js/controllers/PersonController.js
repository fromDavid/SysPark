app.controller("PersonController", ['$scope', 'broadcast', 
'$routeParams', function($scope, broadcast, $routeParams) {
    broadcast.getPerson($routeParams.id)
    .then(function(response) {
        $scope.pessoas = response[0]; //response[$routeParams.id];
    });
}]);