'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module Test', function() {
  describe('#add', function() {
    it('should return 5', function() {
      let result = arithmetic.add(3, 2);
      assert.ok(result === 5, 'not equal to 5');
    });
    it('should return null', function() {
      let result = arithmetic.add('word', 5);
      assert.ok(result === null, 'null not returned');
    });
  });
  describe('#sub', function() {
    it('should return 1', function() {
      let result = arithmetic.sub(3, 2);
      assert.ok(result === 1, 'not equal to 1');
    });
    it('should return null', function() {
      let result = arithmetic.sub('word', 50);
      assert.ok(result === null, 'null not returned');
    });
  });
});
