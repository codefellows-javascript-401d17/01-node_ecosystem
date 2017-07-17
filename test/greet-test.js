'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#greet', function(){
    it('should return hello world!', function(){
      var greetResult = greet.greet('world');
      assert.ok(greetResult === 'hello world!', 'not equal to hey james!')
    });
    it('should throw a missing name error', function(){
      assert.throws(function(){
        greet.greet();
      }, 'error not thrown')
    });
  });
});
