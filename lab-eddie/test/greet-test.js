'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('should return hey world!', function() {
      var result = greet('world');
      assert.ok(result === 'hello world!', 'Not equal to hello world!');
    });
    it('should return null!', function() {
      var result = greet('world');
      assert.ok(result === null, 'Not equal to null');
    });
    it('should throw a missing name error when no arguements are given', function() {
      assert.throws(function() {
        greet();
      }, 'error not thrown');
    });
  });
});
