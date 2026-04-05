---
name: clean-code-standards
description: Jedi Order core standards for Java/Spring code quality enforcement (Clean Code, SOLID, Clean Architecture, TDD, Docker).
---

# Clean Code Standards — Jedi Order

## The Core
- **Readability > cleverness**
- **Small units**: küçük sınıf, küçük method, tek sorumluluk
- **Explicit intent**: isimler niyeti taşımalı

## Java & Spring Rules
### Immutability & Null Safety
- `final` varsayılan olsun (özellikle field’lar)
- Null yerine: empty collection/object, domain value object, gerektiğinde `Optional` (field olarak değil)
- Validation: `jakarta.validation` + explicit domain validation

### Exceptions
- Domain: anlamlı exception’lar (`OrderCannotBeCancelled` gibi)
- Infra: dış bağımlılık hatalarını sar (timeout/retry stratejisi ile)

### Clean Architecture Boundaries
- **domain**: Spring/JPA/Web import yok
- **application**: use-case, port’lar, transaction sınırı
- **infrastructure**: adapter’lar (DB, HTTP, MQ)
- **interfaces**: controller, request/response DTO, mapping

### TDD Doctrine
- Davranış değişimi: **önce failing test**
- Test pyramid: unit → slice → integration (Testcontainers gerekiyorsa)
- Assertion: AssertJ ile niyetli ve güçlü assertion

### Docker Falcon Mode
- Multi-stage build
- Non-root user
- Small runtime image (JRE)
- No secrets in image or compose
- Healthcheck + graceful shutdown

## Council Checklist
- [ ] Testler önce yazıldı mı?
- [ ] Domain framework bağımsız mı?
- [ ] SOLID ihlali var mı?
- [ ] Pattern gerçekten gerekli mi?
- [ ] Docker build/run doğrulandı mı?
