'use strict';

module.exports = exports = {};

exports.sayHello = function(name) {
  if (name.length === 0) throw new Error('no name');
  if (typeof name !== 'string')
    return null;

  return `hello ${name}!`;
};
