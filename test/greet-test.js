'use strict';

const greeting = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#greeting', function(){
      it('should return hello world!', function(){
        var result = greeting('world');
        assert.ok(result === 'hello world!', 'not equal to hello world!');
      });
      it('should throw not a string error', function(){
        var result = greeting(4);
        assert.ok(result === null, 'error not thrown');
    });
  });
});
