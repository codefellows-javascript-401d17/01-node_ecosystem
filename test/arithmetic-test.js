'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function(){
  describe('#add', function(){
    it('should return 5', function(){
      var result = arithmetic.add(2,3);
      assert.ok(result === 5, 'you fucked up');
    });
  });
  describe('#sub', function(){
    it('should return 1', function(){
      var result = arithmetic.sub(3,2);
      assert.ok(result === 1, 'you fucked up');
    });
  });
});
