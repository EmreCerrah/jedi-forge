# ⚔️ Jedi Order of Clean Code

> *"May thy types be strong, thy builds be green, and the Force flow eternal through thy logic."*

A **Star Wars-themed Claude Code plugin** that audits and purifies Java/Spring codebases according to the laws of clean code. Parallel squads of specialist agents scan architecture, testing, security, and dependencies simultaneously.

---

## Table of Contents

- [What is it?](#what-is-it)
- [Installation](#installation)
- [Commands](#commands)
  - [Sense (Audit) Commands](#sense-audit-commands)
  - [Force (Change) Commands](#force-change-commands)
  - [Holocron (Docs) Commands](#holocron-docs-commands)
  - [Council Commands](#council-commands)
- [Agent Architecture](#agent-architecture)
- [Sith Anti-Patterns](#sith-anti-patterns)
- [Usage Examples](#usage-examples)
- [Project Structure](#project-structure)

---

## What is it?

**Jedi Forge** is a plugin that runs on Claude Code. It automatically analyzes and fixes Java/Spring projects across the following domains:


| Domain           | What it does                                                                         |
| ---------------- | ------------------------------------------------------------------------------------ |
| **Architecture** | Finds Clean Architecture violations, layer boundary leaks, and circular dependencies |
| **Testing**      | Detects TDD discipline gaps, weak assertions, and flaky test risks                   |
| **Security**     | Scans for hardcoded secrets, Dockerfile leakage, and config risks                    |
| **Dependencies** | Audits CVE vulnerabilities, version drift, and bloated dependencies                  |
| **Docker**       | Applies multi-stage build, non-root user, and healthcheck optimizations              |

Every command spins up **parallel specialist agent squads** (via the `Task` tool) and produces a single consolidated Council report.

---

## Installation

### Step 1 — Add to Marketplace

```bash
/plugin marketplace add EmreCerrah/jedi-forge   
```

### Step 2 — Install the Plugin

```bash
/plugin install EmreCerrah/jedi-forge   
```

### Step 3 — Run the First Scan

```bash
/jedi:council-report
```

---

## Commands

### Sense (Audit) Commands

> **Mode:** AUDIT ONLY — Does not modify files. Produces reports only.

---

#### `/jedi:sense_architecture [path] [--domain <name>]`

Audits architectural integrity. Detects Clean Architecture boundary violations, package cycles, and domain pollution.

```bash
# Scan the entire project
/jedi:sense_architecture

# Scan a specific domain
/jedi:sense_architecture src/main/java --domain order
```

**Specialist agents deployed:**

- `Temple Boundary Sentinel` — Finds domain/framework contamination
- `Package Cycle Hunter` — Detects circular dependencies
- `Cross-Domain Smuggler Detector` — Catches bounded context leaks
- `Shadow Coupling Auditor` — Exposes hidden static state coupling
- `Pattern Integrity Master` — Flags unjustified pattern usage

---

#### `/jedi:sense_testing [path] [--target <ClassOrPackage>]`

Measures test discipline and quality. Reports missing tests, weak assertions, and flaky test risks.

```bash
# Scan the entire test suite
/jedi:sense_testing

# Scan a specific class
/jedi:sense_testing --target com.example.order.OrderService
```

**Specialist agents deployed:**

- `Red-Green Commander` — Checks TDD discipline gaps and missing behavior tests
- `Assertion Master (AssertJ)` — Upgrades weak assertions to strong AssertJ form
- `Integration Sentinel (Testcontainers)` — Recommends integration tests for DB/HTTP/MQ adapters
- `Test Hygiene Droid` — Detects flaky/slow tests and over-mocking smells

---

#### `/jedi:sense_security [path] [--history]`

Scans for security risks: hardcoded secrets, config leakage, Docker vulnerabilities.

```bash
# Standard security scan
/jedi:sense_security

# Also scan git history for leaks
/jedi:sense_security --history
```

**Specialist agents deployed:**

- `Holocron Scanner` — Scans code and config for secrets/credentials
- `Docker Vault Inspector` — Audits Dockerfile/compose for secret leakage
- `Git History Archaeologist` — (with --history) Searches commit history for leaked secrets
- `Rotation Marshal` — Creates remediation and rotation plan

---

#### `/jedi:sense_dependencies [path] [--scope java|node|all]`

Analyzes dependency risks: CVE vulnerabilities, version drift, unused and bloated libraries.

```bash
# Scan Java dependencies only
/jedi:sense_dependencies --scope java

# Scan all dependencies (Java + Node)
/jedi:sense_dependencies --scope all
```

**Specialist agents deployed:**

- `Maven/Gradle Warden` — Audits dependency tree drift, conflicts, and unused deps
- `Vulnerability Seer` — Identifies CVE risks and mitigations
- `Bloat Cutter` — Finds heavy starters and removable libraries
- `Lockfile Guardian` — (if Node exists) Audits npm lockfile and dependency risks

---

#### `/jedi:sense_readiness [path]`

Produces a pre-release readiness report. Renders a GO / NO-GO verdict.

```bash
/jedi:sense_readiness
```

**What it checks:**

- Test status and gaps
- Security/secret risks
- CVE vulnerabilities and version drift
- Docker readiness (multi-stage, non-root, healthcheck)
- Observability baseline (logs/traces/metrics)

---

### Force (Change) Commands

> **Mode:** CHANGE MODE — Modifies files. Produces diffs/patches.

---

#### `/jedi:force_write-tests <target> [--style unit|slice|integration]`

Generates test files using JUnit + AssertJ. Applies a TDD-first approach.

```bash
# Write unit tests for a specific class
/jedi:force_write-tests com.example.order.OrderService --style unit

# Write integration tests
/jedi:force_write-tests com.example.order.OrderRepository --style integration
```

**Specialist agents deployed:**

- `Test Plan Scribe` — Derives test scenarios in Given/When/Then format
- `JUnit Engineer` — Creates JUnit test skeletons using AAA (Arrange/Act/Assert)
- `AssertJ Refiner` — Writes strong and intentful AssertJ assertions
- `Testcontainers Scout` — (integration mode) Wires minimal Testcontainers setup

---

#### `/jedi:force_refactor-architecture [path] [--domain <name>]`

Restructures architecture according to Clean Architecture principles. Applies Ports & Adapters.

```bash
# Refactor the entire project
/jedi:force_refactor-architecture

# Refactor a specific domain
/jedi:force_refactor-architecture --domain payment
```

**Specialist agents deployed:**

- `Boundary Surgeon` — Moves framework concerns out of domain; introduces ports
- `Adapter Builder` — Creates infra adapters for DB/HTTP/MQ
- `Package Cartographer` — Restructures packages into `domain/application/infrastructure/interfaces`
- `Regression Guardian` — Verifies tests exist for all changes; adds minimal tests if missing

---

#### `/jedi:force_docker-optimize [path]`

Optimizes Dockerfile and compose files for production best practices.

```bash
/jedi:force_docker-optimize
```

**Specialist agents deployed:**

- `Multi-Stage Smith` — Creates/adjusts multi-stage Dockerfile for build/runtime separation
- `Non-Root Guardian` — Ensures the runtime container runs as a non-root user
- `Layer Cache Optimizer` — Improves cache efficiency and reduces rebuild time
- `Healthcheck Keeper` — Adds healthcheck and graceful shutdown configuration

---

### Holocron (Docs) Commands

> **Mode:** DOCS MODE — Creates/updates documentation. Does not refactor code.

---

#### `/jedi:holocron_system-map [path]`

Documents all modules, bounded contexts, and dependency flow of the system.

```bash
/jedi:holocron_system-map
```

**What it produces:**

- Repo structure and module map
- Bounded contexts and ownership boundaries
- Dependency direction and key interfaces
- Build/test/docker runbook

---

### Council Commands

---

#### `/jedi:council-report [path]`

Consolidates outputs from previous Sense/Force runs. Produces a single final report with a prioritized action plan.

```bash
/jedi:council-report
```

**Report format:**

1. Recon Summary
2. Squad Reports
3. Council Verdict (severity + actions)
4. Fix Plan
5. Verify commands

---

## Agent Architecture

```
jedi-marketplace/jedi/
├── agents/
│   ├── recon.md                    # Codebase reconnaissance agent
│   ├── squad-orchestrator.md       # Parallel squad manager
│   ├── council-aggregator.md       # Report consolidator
│   └── specialists/
│       ├── architecture/           # 5 architecture specialists
│       ├── testing/                # 4 testing specialists
│       ├── dependencies/           # 3 dependency specialists
│       └── security/               # 2 security specialists
├── commands/                       # Slash command definitions
└── skills/
    ├── recon-java-project/         # Java project scanning skill
    ├── detect-sith-patterns/       # Anti-pattern detection skill
    ├── clean-code-standards/       # Jedi code standards reference
    └── run-verification/           # Build/test verification skill
```

Every command follows this execution flow:

```
Command invoked
    └─► recon-java-project skill (project map)
            └─► Parallel specialist agents (via Task)
                    └─► Council Aggregator (single report)
```

---

## Sith Anti-Patterns

The bad habits Jedi Forge detects and destroys:


| Anti-Pattern                      | Description                                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| **Darth Object Type**             | `Map<String, Object>` everywhere — type safety completely collapsed |
| **God-Class Death Star**          | A single 5000-line`@Service` that does everything                    |
| **Phantom Menace (Silent Catch)** | `catch (e) {}` — exception swallowed, no log, no trace              |
| **Clone Trooper Protocol**        | Thousands of copy-pasted lines with microscopic mutations            |
| **Jabba The Bloat**               | A single utility pulls in 400 transitive dependencies                |
| **Order 66 (Force Push to Main)** | `git push origin master -f` — CI/CD bypassed, no PR                 |

---

## Usage Examples

### Scenario 1: Onboarding to an unfamiliar project

```bash
# Understand architecture and test status first
/jedi:sense_architecture
/jedi:sense_testing
```

### Scenario 2: Pre-release gate check

```bash
# Check all domains in one shot
/jedi:sense_readiness
```

### Scenario 3: Security audit with full history

```bash
/jedi:sense_security --history
```

### Scenario 4: Clean up a polluted service

```bash
# See what's wrong first
/jedi:sense_architecture --domain order

# Then fix it
/jedi:force_refactor-architecture --domain order
```

### Scenario 5: Close test coverage gaps

```bash
# Find the gaps
/jedi:sense_testing --target com.example.payment

# Write the tests
/jedi:force_write-tests com.example.payment.PaymentService --style unit
```

### Scenario 6: Shrink a Docker image

```bash
/jedi:force_docker-optimize
```

---

## Project Structure

```
Jedi Forge/
├── index.html                      # Project website (glassmorphism UI)
├── style.css                       # Animated starfield background + card styles
├── main.js                         # Interactive terminal effects
├── settings.json                   # Claude Code plugin settings
└── jedi-marketplace/
    └── jedi/
        ├── .claude-plugin/
        │   └── plugin.json         # Plugin metadata (v1.0.0)
        ├── agents/                 # All agent definitions
        ├── commands/               # 9 slash commands
        └── skills/                 # 4 reusable skills
```

---

*The Jedi Order of Clean Code — Assembled by Emre*

*May the Force be with your Compilations.*
