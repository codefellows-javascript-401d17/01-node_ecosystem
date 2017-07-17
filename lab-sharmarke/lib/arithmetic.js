'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
  if(isNaN(a) || isNaN(b)) return 'Not a number!';
  return a + b;
}

exports.sub = function(a,b) {
  if(isNaN(a) || isNaN(b)) return 'Not a number!'
  return a - b;
}
