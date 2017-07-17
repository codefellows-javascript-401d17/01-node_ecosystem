'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#greet', function(){
    it('should return hello world!', function(){
      var greetResult = greet.greet('world');
      assert.ok(greetResult === 'hello world!', 'not equal to hello world!')
    });
    it('should throw a missing name error', function(){
      assert.throws(function(){
        greet.greet();
      }, 'error not thrown')
    });
    it('should return null if not a string', function(){
      assert.throws(function(){
        var greetnull = greet.greet(6);
        assert.ok(greetnull === null, 'not equal to null')
      })
    })
  });
});
