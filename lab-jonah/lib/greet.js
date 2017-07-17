'use strict';

module.exports = function greet(name) {
  if (typeof arguments[0] !== 'string') throw new Error(null);

  return `Hello ${name}!`;
};
