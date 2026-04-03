    ---
    description: Sense security risks (secrets, config leakage, docker hygiene). Audit only.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path] [--history]
    ---

    # Sense: Security — Holocron Watch

    **Mode:** AUDIT ONLY. Do NOT modify files. Detect secrets, risky configs, docker leaks; output rotation & prevention plan.

    ## Execution
1) Run skill: `recon-java-project`
2) Spawn security specialists in parallel (`Task`)
3) Aggregate using Council report template


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Holocron Scanner** — Scan code/config for secrets and credentials.
- **Docker Vault Inspector** — Audit Dockerfile/compose/manifests for secret leakage and insecure defaults.
- **Git History Archaeologist** — If --history: scan history for leaked secrets.
- **Rotation Marshal** — Create remediation/rotation plan and prevention steps.

    ## What it checks / produces
    - Hardcoded secrets (source/config)
- Dockerfile/compose secret leakage
- Credential exposure via logs
- History leaks (optional)

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - (optional) run secret scanner tooling if available
