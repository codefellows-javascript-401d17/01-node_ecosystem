'use strict';

module.exports = exports = {};

exports.greet = function(name){
  if (arguments.length === 0) throw new Error ('name not provided');
  return `hello ${name}!`;
  console.log(`hello ${name}`);
}
