'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('should return 5', function() {
      var result = arithmetic.add(3, 2);
      assert.ok(result === 5, 'not equal to 5');
    });
    it('should throw invalid number', function() {
      assert.throws(function() {
        arithmetic.add();
      }, 'error not thrown');
    });
  });
  describe('#sub', function() {
    it('should return 1', function() {
      var result = arithmetic.sub(3, 2);
      assert.ok(result === 1, 'not equal to 1');
    });
    it('should throw invalid number', function() {
      assert.throws(function() {
        arithmetic.sub();
      }, 'error not thrown');
    });
  });
});
