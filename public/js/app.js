var app = angular.module("syspark", ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { controller: 'MainController',
                        templateUrl: 'js/views/home.html'
            }).
            when('/parks/:id', {
                controller: 'PersonController',
                templateUrl: 'js/views/park.html'
            }).
            otherwise({ redirectTo: '/' });
}]);