'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
  if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') throw new Error('not a number!');

  return a + b;
};

exports.sub = function(a, b) {
  if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') throw new Error('not a number!');
  
  return a - b;
};
