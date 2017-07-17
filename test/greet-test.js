'use strict';

const greet = require('../lib/greet');
const arithmetic = require('../lib/arithmetic');
const assert = require('assert');


describe('greet', function () {
  describe('#greet', function () {
    it('returns hello luis', function () {
      var greeting = greet('luis');
      assert(greeting = 'hello luis');
    })
  })
})

describe('arithmetic', function () {
  describe('#add', function () {
    var sum = arithmetic.add(1, 4);
    it('returns number given 2 numbers', function () {
      assert(typeof sum === "number", "one of them is not a number");
    });
    it('returns sum', function () {
      assert(sum === 5);
    });
  });
})

describe('subtract', function () {
  describe('#sub', function () {
    var diff = arithmetic.sub(4, 1);
    it('returns number given 2 numbers', function () {
      assert(typeof diff === "number", "one of them is not a number");
    });
    it('returns difference', function () {
      assert(diff === 3);
    })
  })
})