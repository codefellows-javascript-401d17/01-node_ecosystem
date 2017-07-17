'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module Test', function() {
  describe('#sayHello', function() {
    it('should return hello world!', function() {
      let result = greet.sayHello('world');
      assert.ok(result === 'hello world!', 'not equal to hello world!');
    });
    it('should return null', function() {
      let result = greet.sayHello(5);
      assert.ok(result === null, 'null not returned');
    });
  });
});
