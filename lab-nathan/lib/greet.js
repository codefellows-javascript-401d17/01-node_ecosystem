'use strict';

module.export = function(name) {
  return typeof name === 'string'? `hello ${name}!` : null;
}