'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  it('should return Hello Jonah!', function() {
    var result = greet('Jonah');
    assert.ok(result === 'Hello Jonah!', 'not equal to Hello Jonah!');
  });

  it('should throw an invalid string error', function() {
    assert.throws(function() {
      greet();
    }, 'error not thrown');
  });
});
