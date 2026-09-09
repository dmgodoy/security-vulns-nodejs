'use strict';

// Synthetic module for SONAR-31951 reviewer-assignment validation — COMMIT-HISTORY FALLBACK case.
//
// Every line here is authored by a former contributor whose git email maps to no GitHub account.
// GitHub therefore resolves no `user.login` for the blame ranges or this file's commit history, so
// reviewer scoring finds no assignable owner and must fall back to the repository's recent commit
// authors (ReviewerSuggestionService#suggestReviewers -> listRecentCommitAuthors). This simulates the
// AC's "Agent generated the code / person is not part of the organization anymore" condition.
function computeDiscount(price, quantity) {
  const unusedTaxRate = 0.21; // S1481: unused local variable — the issue the agent will remediate
  return price * quantity;
}

module.exports = { computeDiscount };
