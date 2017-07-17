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
      assert.throw(arithmetic.add(9), 'Error not thrown');
      assert.throw(arithmetic.add(), 'Error not thrown');
    });
    it('Should throw error when given a NaN arguement', function() {
      assert.throw(arithmetic.add('a', 5), 'Error not thrown');
      assert.throw(arithmetic.add(1, 'c'), 'Error not thrown');
    });

  });

  describe('#sub', function() {
    it('Should return the difference of both arguements', function() {
      let sum = arithmetic.sub(4, 7);
      assert (4 - 7 === sum, 'Answer not equal to 11');
      sum = arithmetic.sub(9, 5);
      assert (5 - 9 === sum, 'Answer not equal to 11');
    });
    it('Should throw error when not given 2 arguements', function() {
      assert.throw(arithmetic.sub(9), 'Error not thrown');
      assert.throw(arithmetic.sub(), 'Error not thrown');
    });
    it('Should throw error when given a NaN arguement', function() {
      assert.throw(arithmetic.sub('a', 5), 'Error not thrown');
      assert.throw(arithmetic.sub(1, 'c'), 'Error not thrown');
    });
  });
});
