'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function() {
    it('should return hello world!', function() {
      var result = greet('world');
      assert.ok(result === 'hello world!', 'not equal to hello world!');
    });

    it('should return null', function() {
      var result = greet();
      assert.ok(result === null, 'is not equal to null');
    });
  });
});
