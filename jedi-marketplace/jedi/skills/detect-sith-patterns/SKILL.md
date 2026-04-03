# Skill — detect-sith-patterns

Purpose: Quick heuristic scan for Sith anti-patterns (evidence-first).

## Targets (Java-first)
- God Class / oversized classes
- Monster Methods (very long methods, deep nesting)
- Transaction Script Hell (procedural mega-services/controllers)
- Framework Domain Pollution (Spring/JPA annotations/imports in domain layer)
- Static state / singleton coupling hotspots

## Approach
- Use `Grep`/`Bash` to locate candidates (e.g. `src/main/java/**/domain/**`).
- Provide evidence: `file:line` + snippet.
- Classify severity using: INFO/WARNING/MAJOR/CRITICAL/SITH LEVEL.

## Output
- Sith Pattern Detected
- Evidence
- Risk (1–2 lines)
- Minimal Jedi Fix
