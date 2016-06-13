app.factory("broadcast", ['$http', function($http) {
    return { 
            getParque: function(id) {
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
          },
            deleteParque: function(id) {
              return $http({method: 'DELETE', url: 'http://localhost/SysPark/public/api/v1/parques/'+id}).then(
              function sucessCallback(response) {
                  return response.data;
              }, function errorCallback(response) {
                  return response.data;
              });
          },
            saveParque: function(dados) {
              return $http({method: 'POST', url: 'http://localhost/SysPark/public/api/v1/parques', data: {info: dados}}).then(
              function sucessCallback(response) {
                  return response.data;
              }, function errorCallback(response) {
                  return response.data;
              });
          },
            getCarro: function(id_Carro) {
              return $http({method: 'GET', url: 'http://localhost/SysPark/public/api/v1/carros/'+id_Carro}).then(
              function sucessCallback(response) {
                  return response.data;
              }, function errorCallback(response) {
                  return response.data;
              });
          },
            getCarro: function() {
              return $http({method: 'GET', url: 'http://localhost/SysPark/public/api/v1/carros'}).then(
              function sucessCallback(response) {
                  return response.data;
              }, function errorCallback(response) {
                  return response.data;
              });
          },
            saveCarro: function(dados) {
              console.log(dados);
              return $http({method: 'POST', url: 'http://localhost/SysPark/public/api/v1/carros', data: { valor: dados }}).then(
              function sucessCallback(response) {
                console.log('-->'+response);
                  return response.data;
              }, function errorCallback(response) {
                  return response.data;
              });
          },
            deleteCarro: function(id) {
              return $http({method: 'DELETE', url: 'http://localhost/SysPark/public/api/v1/carros/'+id}).then(
              function sucessCallback(response) {
                  return response.data;
              }, function errorCallback(response) {
                  return response.data;
              });
          }
    }
}]);