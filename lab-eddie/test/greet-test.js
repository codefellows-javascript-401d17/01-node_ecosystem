'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('should return hey brian!', function() {
      var result = greet('world');
      assert.ok(result === 'hello world!', 'Not equal to hello world!');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet();
      }, 'error not thrown');
    });
  });
});
