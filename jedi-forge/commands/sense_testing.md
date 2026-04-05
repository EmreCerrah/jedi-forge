    ---
    description: Sense test integrity (TDD discipline, coverage gaps, assertion quality, flakiness). Audit only.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path] [--target <ClassOrPackage>]
    ---

    # Sense: Testing — Dagobah Trials

    **Mode:** AUDIT ONLY. Do NOT modify files. Identify missing tests and quality issues; output Council report + test gaps.

    ## Execution
1) Run skill: `recon-java-project`
2) Spawn testing specialists in parallel (`Task`)
3) Aggregate using Council report template


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Red-Green Commander** — Check TDD-first discipline and missing behavior tests.
- **Assertion Master (AssertJ)** — Find weak assertions and recommend upgrades.
- **Integration Sentinel (Testcontainers)** — Suggest integration tests for adapters where needed.
- **Test Hygiene Droid** — Detect flaky/slow tests and over-mocking smells.

    ## What it checks / produces
    - Missing tests for changed behavior
- Weak assertions and brittle mocks
- Flaky/slow test risks
- Integration test candidates (DB/MQ/HTTP adapters)

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - ./mvnw test OR ./gradlew test
