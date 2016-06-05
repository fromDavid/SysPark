var app = angular.module("syspark", ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { 
                controller: 'MainController',
                templateUrl: 'js/views/home.html'
            }).
            when('/parks/:id', {
                controller: 'ParkController',
                templateUrl: 'js/views/park.html'
            }).
            when('/parks/create', {
                controller: 'CreateParkController',
                templateUrl: 'js/views/create.html'
            }).
            when('/parks/edit/:id', {
                controller: 'EditParkController',
                templateUrl: 'js/views/edit.html'
            }).
            otherwise({ redirectTo: '/' });
}]);