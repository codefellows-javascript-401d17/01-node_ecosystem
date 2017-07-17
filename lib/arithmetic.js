module.exports = exports = {};

exports.add = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") throw new Error('one of the values is not a number')
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
}

exports.sub = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") throw new Error('one of the values is not a number')
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 - num2;
  }
}