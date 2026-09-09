'use strict';

// Synthetic module for SONAR-31951 reviewer-assignment validation — PR-ON-PR flow.
//
// This file is introduced on a feature branch and opened as a "source" pull request authored by
// dmgodoy. The Remediation Agent then runs a pull-request job scoped to this PR: it fixes the issue
// on a branch on top of the PR and assigns the SOURCE PR's author (dmgodoy) as reviewer via
// PullRequestServiceImpl#findSourcePullRequestAuthor, independent of git-blame.
function applyShipping(subtotal, region) {
  const unusedFreeThreshold = 100; // S1481: unused local variable — the issue the agent will remediate
  return region === 'domestic' ? subtotal + 5 : subtotal + 15;
}

module.exports = { applyShipping };
