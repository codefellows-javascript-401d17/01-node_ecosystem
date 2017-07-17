'use strict';

module.exports = exports = {};

exports.addNums = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a + b;
};

exports.subNums = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a - b;
};
