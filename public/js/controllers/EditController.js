app.controller("EditController", ['$scope', 'broadcast', 
'$routeParams', function($scope, broadcast, $routeParams) {
    broadcast.getPark($routeParams.id)
    .then(function(response) {
        $scope.parks = response[0]; //response[$routeParams.id];
    });
}]);