'use strict';

/* Filters */

var v = angular.module('angular-ria-filters', []);

v.filter('interpolate', ['version', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);
