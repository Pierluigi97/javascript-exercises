const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  
  let sum = 0;
  for (let index = min; index <= max; index++) {
    sum += index;
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
