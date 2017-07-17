'use strict';

// inporting the arithmetic file and the assert library.
const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

// creating a test named "Arithmetic Module".
describe('Arithmetic Module', function(){

  // variables for testing.
  let a = 10;
  let b = 15;
  let c = 'a';
  let d = true;

  // creating a sub catigory looking at the add function.
  describe('#add', function(){

    // creating the results and inputs that will be tested by both tests.
    let result = arithmetic.add(a, b);

    // describing the test.
    it('should return Number/Integer', function(){
      // checking to see if both values are numbers.
      assert.ok(typeof(a) === "number" && typeof(b) === "number", 'must be a number');
    });

    // describing the test.
    it('should return a + b', function(){
      // seeing if the results are correct.
      assert.ok(result === a + b, 'did not add correctly');
    });
  });

  // creating a sub catigory looking at the sub function.
  describe('#sub', function(){

    // creating the results and inputs that will be tested by both tests.
    let result = arithmetic.sub(a, b);

    // describing the test.
    it('should return Number/Integer', function(){
      // checking to see if both values are numbers.
      assert.ok(typeof(a) === "number" && typeof(b) === "number", 'must be a number');
    });

    // describing the test.
    it('should return a - b', function(){
      // seeing if the results are correct.
      assert.ok(result === a - b, 'did not sub correctly');
    });
  });
});
