    ---
    description: Use the Force to optimize Docker deploy (multi-stage, non-root, caching, healthcheck). Produces diffs/patches.
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path]
    ---

    # Force: Docker Optimize — Falcon Mode

    **Mode:** CHANGE MODE. You MAY modify files. Improve Dockerfile/compose for production best practices.

    ## Execution
1) Run skill: `recon-java-project`
2) Apply Dockerfile/compose optimizations
3) Run skill: `run-verification`
4) Summarize results using Council report template


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Multi-Stage Smith** — Create/adjust multi-stage Dockerfile for build/runtime.
- **Non-Root Guardian** — Ensure runtime runs as non-root user.
- **Layer Cache Optimizer** — Improve caching and reduce rebuild time.
- **Healthcheck Keeper** — Add healthcheck expectations and graceful shutdown notes.

    ## What it checks / produces
    - Dockerfile/compose improvements

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - docker build .
- (optional) docker compose up
