app.factory("broadcast", ['$http', function($http) {
    return { getParque: function(id) {
               return $http({method: 'GET', url: 'http://localhost/SysPark/public/api/v1/parques/'+id}).then(
               function sucessCallback(response) {
                   return response.data;
               }, function errorCallback(response) {
                   return response.data;
               });
           },
           getParque: function() {
               return $http({method: 'GET', url: 'http://localhost/SysPark/public/api/v1/parques'}).then(
               function sucessCallback(response) {
                   return response.data;
               }, function errorCallback(response) {
                   return response.data;
               });
           }
    }
}]);