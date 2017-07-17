'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function() {
    it('should return Hello Jonah!', function() {
      var result = greet('Jonah');
      assert.ok(result === 'Hello Jonah!', 'not equal to Hello Jonah!');
    });
    it('ERROR ERROR ERROR', function() {
      assert.throws(function() {
        greet();
      }, 'error not thrown');
    });
  });
});
