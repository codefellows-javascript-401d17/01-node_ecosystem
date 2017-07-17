'use strict';

module.exports = function(name) {
  if (arguments.length === 0 || typeof name !== 'string') throw new Error('this input is not a string');
  return `hello ${name}!`;
};
