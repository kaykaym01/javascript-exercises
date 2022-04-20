const ftoc = function(temp) {
  let ans = (temp - 32) * (5/9);
  return Math.round(ans * 10) / 10;
};

const ctof = function(temp) {
  let ans = (temp * (9/5)) + 32;
  return Math.round(ans * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
