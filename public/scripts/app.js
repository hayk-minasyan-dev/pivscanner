'use strict';
var app = angular.module("zooApp", [ 'ui.router', 'ui.bootstrap', 'ngTouch']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: "pages/scanner.html",
        })
    $urlRouterProvider.otherwise('/');
}]);










