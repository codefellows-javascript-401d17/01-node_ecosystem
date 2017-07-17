'use strict';

const assert = require('assert');
const arithmetic = require('../lib/arithmetic.js');

describe('Greet.js', function () {
  describe('#addition', function () {
    var a = 3;
    var b = 7;
    it(`should return (${a} + ${b}) = ${a + b}`, function () {
      assert.ok(arithmetic.addition(a, b) === ((a*1) + (b*1)));
    });
  });
});