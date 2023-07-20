const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(...arr) {
  return arr.reduce((product, current) => product * current, 1);
};

const power = function(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(value) {
  let result = 1;

  if (value === 0) return 1;

  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
