function BindUrlAction(log) {
    // TODO: logic to derive correct bind url based on context
    return {
        url: function () {
            var url = 'http://localhost:8080/ria/bind';
            log.log('determined the bind url to be: ' + url);
            return  url;
        }
    }
}