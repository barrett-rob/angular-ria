'use strict';

describe('login page tests', function () {

    it('should automatically load login page when directly linked', function () {
        var promise = browser.get('/login.html');
        promise.then(function () {
            expect(browser.getLocationAbsUrl()).toMatch('/login');
        });
    });

    it('should contain a username and password field', function () {
        var promise = browser.get('/login.html');
        promise.then(function () {
            expect(element(by.model('username'))).toBeTruthy;
            expect(element(by.model('password'))).toBeTruthy;
            expect(element(by.model('bogus-element'))).toBeFalsy;
        });
    });
});

