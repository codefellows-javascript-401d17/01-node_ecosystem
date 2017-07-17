'use strict';

const math = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Math Module', function() {
  describe('#add', function(){
    it('should return 5', function(){
      var result = math.add(2,3);
      assert.ok(result === 5, 'you are wrong');
    });
  });
  describe('#subtract', function(){
    it('should return 1', function(){
      var result = math.subtract(3,2);
      assert.ok(result === 1, 'you are wrong');
    });
  });
});
