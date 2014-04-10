'use strict';

/* jasmine specs for services go here */

describe('synchronous interaction tests', function () {

    var $httpBackend;

    beforeEach(function () {
        module('angular-ria-services');
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
        });
        $httpBackend.resetExpectations();
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('synchronousInteraction', function () {
        it('must return 200 after 200 bind call', inject(function (synchronousInteraction, bindUrl) {
            $httpBackend.when('POST', 'http://localhost:8080/ria/bind').respond(200, { bar: 'bar'}, {}, {});
            var si = synchronousInteraction;
            si.data = {};
            var promise = si.bind();
            $httpBackend.flush();
            promise.then(function (response) {
                expect(response.status).toEqual(200);
                expect(response.data).toEqual({ bar: 'bar' });
            });
        }));

        it('must return 500 after 500 bind call', inject(function (synchronousInteraction, bindUrl) {
            $httpBackend.expectPOST(bindUrl.url()).respond(500, { bar: 'bar' });
            var si = synchronousInteraction;
            si.data = {};
            var promise = si.bind();
            $httpBackend.flush();
            promise.then(function (response) {
                expect(response.status).toEqual(500);
                expect(response.data).toEqual({ bar: 'bar' });
            });
        }));
    })
});