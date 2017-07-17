'use strict';

module.exports = function(name) {
  console.log(typeof name);
  if (!name) throw new Error('No name arguement entered!');
  if (typeof name !== 'string') return null;
  return `hello ${name}!`;
};
