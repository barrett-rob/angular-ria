'use strict';

/* Services */

var v = angular.module('angular-ria-services', []);

v.constant('version', '0.0');

v.service('bindUrl', ['$log', function ($log) {
    return new BindUrlService($log);
}
]);

v.service('synchronousInteraction', ['bindUrl', '$http', '$log', '$q', function (bindUrl, $http, $log, $q) {
    return new SynchronousInteractionService(bindUrl, $http, $log, $q);
}
]);
