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
            expect(element(by.name('username')).isPresent()).toEqual(true);
            expect(element(by.name('password')).isPresent()).toEqual(true);
            expect(element(by.name('login')).isPresent()).toEqual(true);
            expect(element(by.name('bogus-element')).isPresent()).toEqual(false);
        });
    });
});

