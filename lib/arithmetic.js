'use strict';
module.exports = exports = {};

exports.add = function(num1, num2){
  if(arguments.length === 0) throw new Error ('add no numbers provided');
  console.log(num1 + num2);
  return num1 + num2;
};

exports.sub = function(num1, num2){
  if (arguments.length === 0) throw new Error ('sub no numbers provided');
  console.log(num1 - num2);
  return num1 - num2;
};
