'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('should return 9', function() {
      var result = arithmetic.add(3, 6);
      assert.ok(result === 9, 'this did not equal what was intended');
    });
  });

  describe('#sub', function() {
    it('should return 9', function() {
      var result = arithmetic.sub(19, 10);
      assert.ok(result === 9, 'this did not equal what was intended');
    });
  });
});
