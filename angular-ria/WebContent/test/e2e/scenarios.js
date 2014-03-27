'use strict';

describe('angular-ria', function () {

    browser.get('/login.html');

    it('should automatically load /app/login when directly linked', function () {
        expect(element(by.model('username'))).toBeTruthy;
    });

    it('should contain a username and password field', function () {
        expect(element(by.model('username'))).toBeTruthy;
        expect(element(by.model('password'))).toBeTruthy;
    });


});
