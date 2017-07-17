'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
  let sum = a + b;
  if (typeof a !== 'number'|| typeof b !== 'number') return 'not a number';
  return(sum);
};

exports.subtract = function(c, d) {
  let val = c - d;
  if (typeof c !== 'number'|| typeof d !== 'number' ) return 'not a number';
  return(val);
};
