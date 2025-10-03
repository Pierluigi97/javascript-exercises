const leapYears = function(anno) {
  if (anno % 4 != 0) return false;
  if (anno % 100 != 0) return true;
  if (anno % 400 != 0) return false;
  return true;
};

// Do not edit below this line
module.exports = leapYears;
