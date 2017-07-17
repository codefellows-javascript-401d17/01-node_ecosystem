'use strict';

const arithmetic = require('../lib/arithmetic.js')
const assert = require('assert');

describe('Arithmetic Module', function(){
  describe('#add', function(){
    it('should return 4', function(){
      var add = arithmetic.add(2, 2);
      assert.ok(add === 4, 'not equal to 4');
    });
    it('should throw a missing number error', function(){
      assert.throws(function(){
        arithmetic.add();
      }, 'error not thrown')
    });
    it('should return NaN if numbers were not used', function(){
      assert.throws(function(){
        var addnan = arithmetic.add('dog', 'cat');
        assert.ok(addnan === NaN, 'not equal to NaN')
      })
    });
  });
  describe('#sub', function(){
    it('should return 2', function(){
      var sub = arithmetic.sub(4, 2);
      assert.ok(sub === 2, 'not equal to 2');
    });
    it('should throw a missing number error', function(){
      assert.throws(function(){
        arithmetic.sub();
      }, 'error not thrown')
    });
    it('should return NaN if numbers were not used', function(){
      assert.throws(function(){
        var subnan = arithmetic.sub('dog', 'cat');
        assert.ok(subnan === NaN, 'not equal to NaN')
      })
    });
  });
})
