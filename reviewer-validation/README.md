# Reviewer-assignment validation fixtures (SONAR-31951)

Two synthetic modules, each carrying one deterministic `javascript:S1481` (unused local variable)
issue, used to validate automatic PR-reviewer assignment for the Remediation Agent.

| File | Blame authorship | Expected reviewer path |
|------|------------------|------------------------|
| `blame-case.js` | `dmgodoy` (assignable collaborator) | **Direct git-blame** — line owner assigned, no fallback |
| `fallback-case.js` | former contributor, email not linked to any GitHub account | **Commit-history fallback** — blame yields no assignable owner, so recent repo commit authors are used |

The fallback case depends on the repository having a recent, assignable committer (`dmgodoy`) in its
last commits, which the accompanying blame-case commit provides.
