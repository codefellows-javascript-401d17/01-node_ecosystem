'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
  if (typeof(arguments) !== 'number') throw new Error('not a number!');
  return a + b;
};

exports.sub = function(a, b) {
  if (typeof(arguments) !== 'number') throw new Error('not a number!');
  return a - b;
};
