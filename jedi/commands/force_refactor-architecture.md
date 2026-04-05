    ---
    description: Use the Force to refactor architecture (ports/adapters, dependency inversion). Produces diffs/patches.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path] [--domain <name>]
    ---

    # Force: Refactor Architecture — Purge the Dark Side

    **Mode:** CHANGE MODE. You MAY modify files. Apply minimal safe refactors to restore Clean Architecture boundaries and remove Sith anti-patterns.

    ## Execution
1) Run skill: `recon-java-project`
2) Apply minimal boundary refactor (ports/adapters)
3) Run skill: `run-verification`
4) Summarize results using Council report template


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Boundary Surgeon** — Move framework concerns out of domain; introduce ports.
- **Adapter Builder** — Create infra adapters for DB/HTTP/MQ.
- **Package Cartographer** — Restructure packages into domain/application/infrastructure/interfaces.
- **Regression Guardian** — Ensure tests exist/updated; add minimal tests if missing.

    ## What it checks / produces
    - Apply targeted refactors with minimal blast radius

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - ./mvnw test OR ./gradlew test
