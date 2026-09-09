'use strict';

// Synthetic module for SONAR-31951 reviewer-assignment validation — NON-COLLABORATOR SKIP case.
//
// Every line is authored by a real GitHub account (anita-stanisz-sonarsource) that is NOT a
// collaborator on this fork. Reviewer scoring DOES resolve and score that login (unlike the unmapped
// fallback case), so it becomes a candidate — but the platform refuses to assign a non-collaborator
// at request time, so assignFirstConfirmedReviewer logs "not confirmed by the platform, trying next
// candidate" and moves on. With no other candidate here, the run completes with no reviewer.
function computeTax(amount, rate) {
  const unusedRoundingMode = 'HALF_UP'; // S1481: unused local variable — the issue the agent will remediate
  return amount * rate;
}

module.exports = { computeTax };
