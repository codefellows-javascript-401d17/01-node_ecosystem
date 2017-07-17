'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  if (typeof(arguments) !== 'string') throw new Error(null);

  return `Hello ${name}!`;
};
