const add = function(a, b) {
 return Number(a) + Number(b);
};

const subtract = function(a, b) {
 return Number(a) - Number(b);
};

const sum = function(array) {
 return array.reduce((a, b) =>{
  return a + b;
 }, 0);
};

const multiply = function(array) {
 return array.reduce((a, b) =>{
  return a * b;
 }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  };
  return n * factorial(n -1); 
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
