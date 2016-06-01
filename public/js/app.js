var app = angular.module("friendapp", ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { controller: 'MainController',
                        templateUrl: 'js/views/home.html'
            }).
            when('/persons/:id', {
                controller: 'PersonController',
                templateUrl: 'js/views/person.html'
            }).
            otherwise({ redirectTo: '/' });
}]);