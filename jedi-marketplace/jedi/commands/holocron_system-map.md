    ---
    description: Generate system map documentation (modules, bounded contexts, dependency flow).
    allowed-tools: Read, Glob, Grep, Bash
    argument-hint: [path]
    ---

    # Holocron: System Map — Reveal the Galaxy

    **Mode:** DOCS MODE. You MAY create/update documentation files. Do not refactor code unless explicitly asked.

    ## Execution
1) Run skill: `recon-java-project`
2) Generate docs (system map + module flow)
3) Keep output concise and navigable


## Squad (parallel)
    Run these specialists **in parallel** using `Task`. Each returns: Findings, Evidence, Severity, Fix.

    - **Recon Droid** — Map repo structure, modules, technologies.
- **Context Mapper** — Propose bounded contexts and ownership.
- **Flow Illustrator** — Describe dependency direction and key interfaces.
- **Runbook Scribe** — Document how to run/test/build/docker.

    ## What it checks / produces
    - Docs generation

    ## Output Contract
    1) Recon Summary
    2) Squad Reports
    3) Council Verdict (severity + actions)
    4) Fix Plan
    5) Verify

    ## Verify
    - n/a
