'use strict';

/* jasmine specs for services go here */

describe('service tests', function () {
    beforeEach(module('angular-ria-services'));

    describe('bindUrl', function () {
        it('should return the correct bind url for debugging', inject(function (bindUrl) {
            expect(bindUrl.url()).toEqual('http://localhost:8080/ria/bind');
        }));
    })
});
