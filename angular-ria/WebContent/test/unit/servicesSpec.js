'use strict';

/* jasmine specs for services go here */

describe('service tests', function () {
    beforeEach(module('angular-ria-services'));


    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.0');
        }));
    });

});
