'use strict';

describe('index page tests', function () {

    it('should automatically load index page when directly linked', function () {
        var promise = browser.get('/index.html');
        promise.then(function () {
            expect(browser.getLocationAbsUrl()).toMatch('/index');
        });
    });

});
