'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('should return 10', function() {
      let result = arithmetic.add(3, 7);
      assert.ok(result === 10);
    });

    it('should throw error with non-number inputs.', function() {
      assert.throws(function() {
        arithmetic.add('a', 4);
      });
    });
  });

  describe('#subtract', function() {
    it('should return 10', function() {
      let result = arithmetic.subtract(30, 20);
      assert.ok(result === 10);
    });

    it('should throw error with non-number inputs.', function() {
      assert.throws(function() {
        arithmetic.subtract('a', 20);
      });
    });
  });
});

