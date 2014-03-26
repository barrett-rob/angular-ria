'use strict';

/* jasmine specs for controllers go here */

describe('controller tests', function () {

    beforeEach(module('angular-ria-controllers'));

    it('LoginController should have 3 inputs ....', inject(function ($controller) {
        var scope = {};
        var ctrl = $controller('LoginController', { $scope: scope });
        expect(scope.inputs.length).toBe(3);
    }));

    it('should ....', inject(function () {
        //spec body
    }));
});
