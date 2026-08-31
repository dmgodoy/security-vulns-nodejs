// TEST-ONLY file for S5 "Assign to Agent" validation (SONAR-31822).
// Intentionally introduces detectable JavaScript issues for the local
// SonarQube harness. Not wired into the app; safe to delete.

function computeDiscount(price, rate) {
  const unusedTotal = price * rate; // javascript:S1481 - unused local variable
  let result = price;
  result = price - price * rate; // javascript:S1854 - previous value never read
  return result;
}

function greet(name) {
  const salutation = 'hello'; // javascript:S1481 - unused local variable
  return name;
}

module.exports = { computeDiscount, greet };
