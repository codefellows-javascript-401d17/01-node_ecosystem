'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#addNums', function(){
    it('should return 8', function() {
      var result = arithmetic.addNums(3,5);
      assert.ok(result === 8, 'not equal to 8');
    });
  });

  describe('#subNums', function() {
    it('should return 5', function() {
      var result = arithmetic.subNums(7,2);
      assert.ok(result === 5, 'not equal to 5');
    });
  });
});
