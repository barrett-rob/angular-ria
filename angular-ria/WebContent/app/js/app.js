'use strict';

// Declare app level module which depends on filters, and services
var v = angular.module('angularjs-ria', [
    'ngRoute',
    'angularjs-ria-filters',
    'angularjs-ria-services',
    'angularjs-ria-directives',
    'angularjs-ria-controllers'
]);

v.config(['$routeProvider', function ($routeProvider) {
    // TODO: remove this
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
