var app = angular.module("syspark", ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { 
                controller: 'MainController',
                templateUrl: 'js/views/home.html'
            }).
            when('/parques/:id', {
                controller: 'ParqueController',
                templateUrl: 'js/views/parque.html'
            }).
            when('/parques/create', {
                controller: 'ParqueController',
                templateUrl: 'js/views/create.html'
            }).
            when('/parques/edit/:id', {
                controller: 'ParqueController',
                templateUrl: 'js/views/edit.html'
            }).
            otherwise({ redirectTo: '/' });
}]);