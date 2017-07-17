'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
  if (typeof a !== 'number'|| typeof b !== 'number') return 'not a number';
  return(a + b);
};

exports.subtract = function(c, d) {
  if (typeof c !== 'number'|| typeof d !== 'number' ) return 'not a number';
  return(c - d);
};
