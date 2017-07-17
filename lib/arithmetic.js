'use strict';

// assigning exports to a empty object and assinging it to the global scope.
module.exports = exports = {};

// adding an add function to the exports variable.
exports.add = function(a, b){
  //checking to see if both inputs are numbers, if not stopping the function and throwing an error.
  if(typeof(a) !== "number" || typeof(b) !== "number") return 'must be a number/integer'; // NOTE:(just curious if this is the way the function was supposed to fail?) throw new Error('must be a number/integer');
  // if it passes it will return the sum.
  return a + b;
};

// adding an sub function to the exports variable.
exports.sub = function(a, b){
  //checking to see if both inputs are numbers, if not stopping the function and throwing an error.
  if(typeof(a) !== "number" || typeof(b) !== "number") return 'must be a number/integer';// NOTE: throw new Error('must be a number/integer');
  // if it passes it will return the difference.
  return a - b;
};
