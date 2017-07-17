'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('should return 10', function() {
      return arithmetic.add(3, 7);
    });
  });

  describe('#subtract', function() {
    it('should return 10', function() {
      return arithmetic.subtract(30, 20);
    });
  });
});

