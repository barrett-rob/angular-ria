'use strict';

/* Directives */

var v = angular.module('angular-ria-directives', []);

v.directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
}]);
