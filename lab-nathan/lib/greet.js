'use strict';

module.exports = function(name) {
  return typeof name === 'string'? `hello ${name}!` : null;
};