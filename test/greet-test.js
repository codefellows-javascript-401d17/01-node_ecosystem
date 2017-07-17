'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('#hello', function() {
  it('should return hello world', function() {
    var result = greet('world');
    assert.ok(result === 'hello world!', 'this is not the world!');
  });

  it('should throw a missing name error', function() {
    assert.throws(function() {
      greet();
    });
  });
});
