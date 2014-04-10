'use strict';

/* Services */

var v = angular.module('angular-ria-services', []);

v.constant('version', '0.0');

v.service('bindUrl', ['$log', function ($log) {
    return new BindUrlAction($log);
}
]);

v.service('synchronousInteraction', ['bindUrl', '$http', '$log', '$q', function (bindUrl, $http, $log, $q) {
    return new SynchronousInteractionAction(bindUrl, $http, $log, $q);
}
]);
