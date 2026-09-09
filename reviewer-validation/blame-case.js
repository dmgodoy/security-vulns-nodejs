'use strict';

// Synthetic module for SONAR-31951 reviewer-assignment validation — DIRECT GIT-BLAME case.
//
// Authored by dmgodoy, an assignable collaborator on this repo. GitHub resolves the blame ranges to
// the `dmgodoy` login, so reviewer scoring picks the line owner directly and never reaches the
// commit-history fallback. Contrast with fallback-case.js.
function computeTotal(items) {
  const unusedCurrency = 'EUR'; // S1481: unused local variable — the issue the agent will remediate
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

module.exports = { computeTotal };
