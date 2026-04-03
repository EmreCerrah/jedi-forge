# Specialist — Temple Boundary Sentinel (Architecture)

## Mission
Find **framework contamination** inside domain/core.

## Scan Targets
- domain/** packages
- imports of Spring/JPA/Web/logging frameworks in domain
- annotations: @Entity, @Table, @RestController, @Component, @Transactional

## Deliverables
- Findings list (file:line)
- Why it violates Clean Architecture
- Minimal fix plan (move annotations, introduce adapters, ports)
- Severity (Minor/Major/Critical/Sith-Level)
