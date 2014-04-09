/* Synchronous Interactions with the backend.
 */
function SynchronousInteractionService(bindUrl, $http, $log, $q) {

    $log.log('creating synchronous interaction service with bind url: ' + bindUrl);

    return {
        bind: function () {
            var deferred = $q.defer();
            var url = bindUrl.url();
            $log.log('url for synchronous interaction is: ' + url);
            $log.log('data for synchronous interaction is: ' + this.data);
            var post = $http.post(url, this.data);
            post.success(function (data, status, headers, config) {
                $log.log('synchronous interaction response success: ' + status);
                status = status;
                deferred.resolve({ status: status, data: data });
            });
            post.error(function (data, status, headers, config) {
                $log.log('synchronous interaction response error: ' + status);
                status = status;
                deferred.resolve({ status: status, data: {} });
            });
            return deferred.promise;
        },
        data: null
    };
};