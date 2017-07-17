'use strict';

module.exports = function(name) {
  if(typeof name != 'string') return null;
  console.log(`hello ${name}`);
}
