# Skill — recon-java-project

Purpose: Produce a fast, factual **Recon Summary** for Java/Spring repos.

## Steps (prefer Bash + Read)
1) Detect build tool:
   - Maven: `pom.xml` (+ `./mvnw`)
   - Gradle: `build.gradle`, `build.gradle.kts` (+ `./gradlew`)
2) Detect multi-module layout (Maven modules / Gradle settings).
3) Detect Java version (toolchain, maven-compiler-plugin, gradle toolchain).
4) Detect Spring (boot starters, annotations, config).
5) Detect testing stack (JUnit4/5, AssertJ, Mockito, Testcontainers).
6) Detect Docker artifacts (Dockerfile, compose, k8s manifests).
7) Output a short Recon Summary:

- Build: Maven/Gradle, multi-module?, wrappers?
- Java: version/toolchain
- Frameworks: Spring Boot/Spring, JPA/Hibernate, etc.
- Tests: JUnit/AssertJ/Mockito/Testcontainers
- Docker: yes/no (what files)
