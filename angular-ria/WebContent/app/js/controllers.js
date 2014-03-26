'use strict';

/* Controllers */

var app = angular.module('angular-ria-controllers', []);

app.controller('LoginController', ['$scope', function ($scope) {
    // TODO: at some stage this will be the result of a service call to get the required inputs from the backend application.
    $scope.inputs = ['username', 'password', 'scope' ];
}]);

