'use strict';

module.exports = exports = {};

exports.add = function(x, y) {
  if(arguments.length !== 2) throw new Error('You must enter 2 arguements!');
  if(typeof x !== 'number' || typeof y !== 'number') throw new Error('Both arguements must be numbers!');
  return x + y;
}

exports.sub = function(x, y) {
  if(arguments.length !== 2) throw new Error('You must enter 2 arguements!');
  if(typeof x !== 'number' || typeof y !== 'number') throw new Error('Both arguements must be numbers!');
  return x - y;
}
