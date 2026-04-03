    ---
    description: Consolidate multiple findings into a single Jedi Council report.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path]
    ---

    # Council: Report — Final Verdict

    **Mode:** REPORT MODE. Aggregate outputs from Sense/Force activities into one consistent report with prioritized plan.

    ## Execution
1) Collect outputs from recent Sense/Force runs
2) Normalize severity and evidence
3) Produce a single Council report (standard template)


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Council Aggregator** — Merge reports into a single verdict.
- **Severity Arbiter** — Normalize severity and priorities.
- **Fix Planner** — Create step-by-step fix plan and verification steps.

    ## What it checks / produces
    - Aggregation and prioritization

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - List verify commands relevant to repo (mvn/gradle/docker).
