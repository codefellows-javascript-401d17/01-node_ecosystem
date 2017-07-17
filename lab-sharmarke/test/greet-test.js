'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe ('Greet Module', function() {
  it('should return hello world!', function() {
    var result = greet(world);
    assert.ok(result ==='hello world!', 'not equal to hello world!');
  });
  it('should throw a missing name error', function() {
    greet();
  },'error not thrown');
});
