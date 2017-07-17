'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#', function() {
    it('should return hello world!', function() {
      let result = greet('world');
      assert.ok(result === 'hello world!', 'unexpected result.');
    });
  });
});