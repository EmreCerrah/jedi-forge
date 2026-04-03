    ---
    description: Sense architecture integrity (Clean Architecture boundaries, cycles, cross-domain leaks, Sith anti-patterns). Audit only.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path] [--domain <name>]
    ---

    # Sense: Architecture — Temple Scan

    **Mode:** AUDIT ONLY. Do NOT modify files. Run recon, spawn specialist squads in parallel (Task), aggregate Council report.

    ## Execution
1) Invoke skill **jedi:recon-java-project** to scan the project structure
2) Invoke skill **jedi:detect-sith-patterns** to find anti-patterns
3) Spawn squad specialists in parallel (`Task`)
4) Aggregate using Council report template


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Temple Boundary Sentinel** — Detect domain/framework contamination and layer violations.
- **Package Cycle Hunter** — Find circular dependencies across packages/modules.
- **Cross-Domain Smuggler Detector** — Find bounded-context leaks and shared-core abuse.
- **Shadow Coupling Auditor** — Find hidden coupling via static state/singletons/utilities.
- **Pattern Integrity Master** — Flag unjustified patterns and propose simpler designs.

    ## What it checks / produces
    - Clean Architecture boundary violations
- Circular dependencies (package/module)
- Cross-domain leaks
- Sith anti-patterns: God Class, Transaction Script Hell, Framework Domain Pollution

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - (optional) ./mvnw test
- (optional) ./gradlew test
