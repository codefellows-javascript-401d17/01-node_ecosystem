'use strict';

// assigning exports to a empty object and assinging it to the global scope.
module.exports = exports = {};

// creating a hello function and attaching it to the globally scoped exports variable.
exports.hello = function(str){
  // checking to see if there is some form of input if not returning null.
  if(typeof(str) !== "string") return null;
  // returns hello and the str input.
  return `hello ${str}`;
};
