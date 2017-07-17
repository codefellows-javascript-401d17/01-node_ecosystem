'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('Should return the sum of both arguements', function() {
      let sum = arithmetic.add(4, 7);
      assert (4 + 7 === sum, 'Answer not equal to 11');
      sum = arithmetic.add(9, 5);
      assert (5 + 9 === sum, 'Answer not equal to 14');
    });
    it('Should throw error when not given 2 arguements', function() {
      assert.throws(function () {
        arithmetic.add(9);
      }, 'Error not thrown');

      assert.throws(function() {
        arithmetic.add();
      }, 'Error not thrown');
    });

    it('Should throw error when given a NaN arguement', function() {
      assert.throws(function() {
        arithmetic.add('a', 5);
      }, 'Error not thrown');
      assert.throws(function() {
        arithmetic.add(1, 'c');
      }, 'Error not thrown');
    });

  });

  describe('#sub', function() {
    it('Should return the difference of both arguements', function() {
      let range = arithmetic.sub(7, 4);
      assert (7 - 4 === range, 'Answer not equal to 11');
      range = arithmetic.sub(9, 5);
      assert (9 - 5 === range, 'Answer not equal to 11');
    });

    it('Should throw error when not given 2 arguements', function() {
      assert.throws(function () {
        arithmetic.sub(9);
      }, 'Error not thrown');

      assert.throws(function() {
        arithmetic.sub();
      }, 'Error not thrown');
    });

    it('Should throw error when given a NaN arguement', function() {
      assert.throws(function() {
        arithmetic.sub('a', 5);
      }, 'Error not thrown');
      assert.throws(function() {
        arithmetic.sub(1, 'c');
      }, 'Error not thrown');
    });
  });
});
