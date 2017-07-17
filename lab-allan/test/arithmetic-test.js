'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module Test', function() {
  describe('#add', function() {
    it('should return 5', function() {
      let result = arithmetic.add(3, 2);
      assert.ok(result === 5, 'not equal to 5');
    });
  });
  describe('#sub', function() {
    it('should return 1', function() {
      let result = arithmetic.sub(3, 2);
      assert.ok(result === 1, 'not equal to 1');
    });
  });
});
