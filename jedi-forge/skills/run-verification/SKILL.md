# Skill — run-verification

Purpose: Standardize **Verify** steps after Force changes.

## Rules
- Prefer wrappers (`./mvnw`, `./gradlew`) when present.
- If both exist, pick the one matching the project.
- Keep commands minimal and reproducible.

## Verification Commands
- Maven:
  - `./mvnw test`
  - optional: `./mvnw -q -DskipTests=false test`
- Gradle:
  - `./gradlew test`
- Docker (if Dockerfile exists):
  - `docker build .`
- Compose (if compose exists):
  - `docker compose up -d` (optional)
  - `docker compose logs -f` (optional)

## Output
- List executed commands
- Summarize pass/fail
- If fail: show the first actionable error + suggested fix
