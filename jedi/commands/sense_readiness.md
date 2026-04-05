    ---
    description: Sense release readiness gate (tests + security + deps + docker + observability). Audit only.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path]
    ---

    # Sense: Readiness — Council Gate

    **Mode:** AUDIT ONLY. Do NOT modify files. Summarize risks and produce GO/NO-GO verdict with severity.

    ## Execution
1) Run skill: `recon-java-project`
2) Gather inputs from Sense lenses (architecture/testing/security/dependencies)
3) Produce GO/NO-GO with severity + verify checklist


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Council Aggregator** — Consolidate findings from architecture/testing/security/dependencies lenses.
- **Docker Readiness Sentinel** — Check Docker build/run readiness and healthcheck expectations.
- **Observability Steward** — Check logging/tracing/metrics baseline readiness.

    ## What it checks / produces
    - Test status & gaps
- Security/secret risks
- Dependency vulnerabilities/drift
- Docker readiness (multi-stage, non-root, healthcheck)
- Observability baseline (logs/ids/metrics)

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - ./mvnw test (or ./gradlew test)
- docker build . (if Dockerfile exists)
