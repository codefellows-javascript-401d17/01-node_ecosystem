'use strict';

module.exports = exports = {};

exports.add = function(first, second) {
  if (isNaN(first) || isNaN(second))
    return null;
  return first + second;
};

exports.sub = function(first, second) {
  if (isNaN(first) || isNaN(second))
    return null;
  return first - second;
};
