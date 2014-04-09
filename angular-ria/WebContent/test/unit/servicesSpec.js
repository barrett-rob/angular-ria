'use strict';

/* jasmine specs for services go here */

describe('service tests', function () {
    beforeEach(module('angular-ria-services'));


    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.0');
        }));
    });

    describe('bindUrl', function () {
        it('should return the correct bind url for debugging', inject(function (bindUrl) {
            expect(bindUrl).toEqual('http://localhost:8080/ria/bind');
        }));
    })
});
