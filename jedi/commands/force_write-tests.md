    ---
    description: Use the Force to write tests (JUnit + AssertJ). Produces diffs/patches.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: <target> [--style unit|slice|integration]
    ---

    # Force: Write Tests — Training Montage

    **Mode:** CHANGE MODE. You MAY modify files. Generate tests first, then implement minimal changes only if needed for testability.

    ## Execution
1) Run skill: `recon-java-project`
2) Generate test plan + tests (JUnit + AssertJ)
3) Run skill: `run-verification`
4) Summarize results using Council report template


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Test Plan Scribe** — Derive test cases (Given/When/Then) and edge cases.
- **JUnit Engineer** — Create JUnit test skeletons with Arrange/Act/Assert.
- **AssertJ Refiner** — Use AssertJ assertions with strong intent.
- **Testcontainers Scout** — If integration: wire Testcontainers minimal setup.

    ## What it checks / produces
    - Generate test plan + files
- Prefer TDD-first scaffolding

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - ./mvnw test OR ./gradlew test
