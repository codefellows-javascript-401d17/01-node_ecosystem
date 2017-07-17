'use strict';

module.exports = exports = {};

exports.add = function(first, second) {
  if (isNaN(first) || isNaN(second)) throw new Error('not a number');
  return first + second;
};

exports.sub = function(first, second) {
  if (isNaN(first) || isNaN(second)) throw new Error('not a number');
  return first - second;
};
