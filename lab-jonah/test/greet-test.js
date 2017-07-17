'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  it('should return Hello World!', function() {
    var result = greet('World');
    assert.ok(result === 'Hello World!', 'not equal to Hello World!');
  });

  it('should throw an invalid string error', function() {
    assert.throws(function() {
      greet();
    }, 'error not thrown');
  });
});
