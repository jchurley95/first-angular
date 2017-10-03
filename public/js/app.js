var app = angular.module('LogInApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
    })
    .when('/home', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})