'use strict';

/* Services */

var v = angular.module('angular-ria-services', []);

v.constant('version', '0.0');

v.factory('bindUrl', function () {
    // TODO: logic to derive correct bind url based on context
    return 'http://localhost:8080/ria/bind';
});
