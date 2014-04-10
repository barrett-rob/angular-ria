'use strict';

/* Directives */

var v = angular.module('angular-ria-directives', []);

v.directive('appVersion', ['version', function (version) {
    return function (scope, element, attrs) {
        element.text(version);
    };
}]);

v.directive('riaTextInput', [function () {
    return {
        restrict: 'E',
        scope: {
            riaName: '=',
            riaValue: '='
        },
        templateUrl: 'app/templates/ria-text-input.html'
    };
}])
;

v.directive('riaButton', [function () {
    return {
        restrict: 'E',
        scope: {
            riaName: '@',
            riaAction: '&'
        },
        templateUrl: 'app/templates/ria-button.html'
    };
}])
;

