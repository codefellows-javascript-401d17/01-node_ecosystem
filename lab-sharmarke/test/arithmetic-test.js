'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('should return 10', function() {
      var result = arithmetic.add(5, 5);
      assert.ok(result === 10, 'you are wrong!');
    });
  });
  describe('#sub', function() {
    it('should return 0', function() {
      var result = arithmetic.sub(5, 5);
      assert.ok(result === 0, 'you are wrong!');
    });
  });
});
