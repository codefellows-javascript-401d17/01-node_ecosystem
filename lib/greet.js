'use strict';

module.exports = function(name) {
  if (arguments.length === 0 || typeof name !== 'string') return null;
  return `hello ${name}!`;
};
