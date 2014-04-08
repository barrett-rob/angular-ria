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
        link: function (scope, elem, attrs) {
            console.log("Recognized the riaTextInput");
        },
        scope: {
            name: '=',
            value: '='
        },
        templateUrl: 'app/templates/ria-text-input.html'
    };
}])
;

