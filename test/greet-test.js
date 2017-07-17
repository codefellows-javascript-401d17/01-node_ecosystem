'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');

describe('Greet.js', function(){
  describe('#helloUser', function(){
    // testing name
    var name = 'john';
    var hello = greet.helloUser(name);
    it(`"${!!name}" should return hello world`, function(){
      assert.notStrictEqual(hello, 'hello ');
    });
    it('Returned null', function(){
      assert.equal(name, false);
    });
  });
});