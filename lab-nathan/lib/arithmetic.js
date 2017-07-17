'use strict';

let arithmetic = {};
module.exports = arithmetic;

arithmetic.add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Cannot add non-numbers.');
  }

  return a + b;
};

arithmetic.subtract = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Cannot subract non-numbers.');
  }

  return a - b;
};