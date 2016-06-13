var app = angular.module("syspark", ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { 
                controller: 'MainController',
                templateUrl: 'js/views/home.html'
            }).
            when('/parques/:id', {
                controller: 'ParqueController',
                templateUrl: 'js/views/inserir.html'
            }).
            when('/carros', {
                controller: 'CarroController',
                templateUrl: 'js/views/carro.html'
            }).
            otherwise({ redirectTo: '/' });
}]);