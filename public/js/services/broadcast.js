app.factory("broadcast", ['$http', function($http) {
    return { getPark: function(id) {
               return $http({method: 'GET', url: 'http://localhost/SysPark/public/api/v1/parks/'+id}).then(
               function sucessCallback(response) {
                   return response.data;
               }, function errorCallback(response) {
                   return response.data;
               });
           },
           getParks: function() {
               return $http({method: 'GET', url: 'http://localhost/SysPark/public/api/v1/parks'}).then(
               function sucessCallback(response) {
                   return response.data;
               }, function errorCallback(response) {
                   return response.data;
               });
           }
    }
}]);