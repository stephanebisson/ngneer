'use strict';

var ngneer = require('../src/lib/ngneer.js').ngneer;

exports.uselessTestNumber1 = function (test) {
    test.expect(2);
    test.ok(ngneer.ipa, "the ipa function is defined");
    test.ok(ngneer.vanilla, "the vanilla function is defined");
    test.done();
};