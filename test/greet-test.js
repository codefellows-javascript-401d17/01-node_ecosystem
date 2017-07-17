'use strict';

// inporting the greet file and the assert library.
const greet = require('../lib/greet.js');
const assert = require('assert');

// creating a test named "Greet Module".
describe('Greet Module', function(){
  
  // variables for testing.
  let c = 'world!';
  let x = 'this is not world!';
  let n = true;

  // creating a sub catigory looking at the hello function.
  describe('#hello', function(){

    // describing the test.
    it('should return hello world!', function(){
      // calling the hello function and passing in a value.
      let result = greet.hello(c);
      assert.ok(result === 'hello world!', 'not saying \"hello world!\"');
    });

    // describing the test.
    it('should return null if not string', function(){
      // calling the hello function and passing in a value.
      let result = greet.hello(n);
      assert.ok(result === null, 'not returning null');
    });
  });
});
