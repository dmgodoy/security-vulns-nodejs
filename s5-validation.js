// TEST-ONLY file for S5 "Assign to Agent" validation (SONAR-31822).
// Intentionally introduces detectable JavaScript issues for the local
// SonarQube harness. Not wired into the app; safe to delete.

function computeDiscount(price, rate) {
  const result = price - price * rate;
  return result;
}

function greet(name) {
  return name;
}

module.exports = { computeDiscount, greet };
