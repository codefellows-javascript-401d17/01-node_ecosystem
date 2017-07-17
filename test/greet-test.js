'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#greet', function(){
      it('should return hello world!', function(){
        var result = greet('world');
        assert.ok(result === 'hello world!', 'not equal to hello world!');
      });
      it('should throw not a string error', function(){
        var result = greet(4);
        assert.ok(result === null, 'error not thrown');
      });
  });
});
