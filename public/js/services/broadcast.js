app.factory("broadcast", ['$http', function($http) {
    return { getPerson: function(id) {
               return $http({method: 'GET', url: 'http://localhost/friendlistapp/public/api/v1/persons/'+id}).then(
               function sucessCallback(response) {
                   return response.data;
               }, function errorCallback(response) {
                   return response.data;
               });
           },
           getPersons: function() {
               return $http({method: 'GET', url: 'http://localhost/friendlistapp/public/api/v1/persons'}).then(
               function sucessCallback(response) {
                   return response.data;
               }, function errorCallback(response) {
                   return response.data;
               });
           }
    }
}]);