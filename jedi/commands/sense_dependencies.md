    ---
    description: Sense dependency risks (CVE, drift, unused/bloat). Audit only.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path] [--scope java|node|all]
    ---

    # Sense: Dependencies — Kyber Alignment

    **Mode:** AUDIT ONLY. Do NOT modify files. Identify vulnerabilities, version drift, unused/bloat; output upgrade plan.

    ## Execution
1) Run skill: `recon-java-project`
2) Spawn dependency specialists in parallel (`Task`)
3) Aggregate using Council report template


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Maven/Gradle Warden** — Audit dependency tree drift/conflicts/unused.
- **Vulnerability Seer** — Identify CVE risks and mitigations.
- **Bloat Cutter** — Find heavy starters and removable libs.
- **Lockfile Guardian** — If node exists: audit lockfiles and npm dependency risks.

    ## What it checks / produces
    - Known vulnerabilities (direct + transitive)
- Dependency drift / BOM misalignment
- Unused dependencies
- Bloat (heavy starters)

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - ./mvnw -q dependency:tree OR ./gradlew dependencies
- (optional) npm/pnpm audit
