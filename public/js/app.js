var app = angular.module("syspark", ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { 
                controller: 'MainController',
                templateUrl: 'js/views/auth.html'
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
            when('/parks/destroy/:id', {
                controller: 'DestroyParkController',
                templateUrl: 'js/views/destroy.html'
            }).
            otherwise({ redirectTo: '/' });
}]);