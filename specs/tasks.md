# 📋 Plano de Refatoração - Crazy Functions Library

**Data**: 2026-06-28  
**Status**: 🔄 IN_PROGRESS

---

## 📊 Análise da Estrutura Atual

### ✅ Pontos Fortes
- ✓ 27 funções bem testadas
- ✓ 100% coverage em branches/functions  
- ✓ TypeScript strict mode
- ✓ Zero dependências em produção
- ✓ Código limpo e bem organizado

### ⚠️ Melhorias Necessárias

1. **Estrutura Flat de Funções** → Sem categorização clara
2. **Testes com Path Redundante** → `__tests__/src/functions/` duplica "src"
3. **Index Principal Desorganizado** → Importações sem agrupamento por categoria
4. **Falta de Padrões Base** → Sem interfaces abstratas ou helpers comuns
5. **Documentação de Arquitetura** → Sem guia visual da estrutura

---

## 🎯 Plano de Execução (7 Tasks)

### ✅ Task 1: Reorganizar Funções por Categoria
**Prioridade**: ⭐⭐⭐  
**Status**: 🔄 IN_PROGRESS  

```
src/functions/
├── array/           # 13 funções
│   ├── index.ts
│   ├── group-objects.ts
│   ├── range.ts
│   └── ...
├── string/          # 2 funções
│   ├── index.ts
│   └── ...
├── object/          # 6 funções
│   ├── index.ts
│   └── ...
├── utility/         # 1 função
│   ├── index.ts
│   └── is-empty.ts
├── format/          # 1 função
│   ├── index.ts
│   └── format-currency.ts
├── higher-order/    # 3 funções
│   ├── index.ts
│   ├── memoize.ts
│   ├── debounce.ts
│   └── delay.ts
└── index.ts         # Main barrel (reorganizado)
```

**Subtasks**:
- [x] Criar diretórios de categoria
- [x] Mover funções para categorias
- [x] Criar index.ts em array/, string/, object/
- [ ] Criar index.ts em utility/, format/, higher-order/
- [ ] Atualizar src/functions/index.ts (usar sub-índices)
- [ ] npm run build && npm test

---

### ✅ Task 2: Reestruturar Diretório de Testes
**Prioridade**: ⭐⭐⭐  
**Status**: 🔄 IN_PROGRESS  

Estrutura Atual (❌):
```
src/__tests__/src/functions/array-diff.test.ts
src/__tests__/src/functions/group-objects.test.ts
```

Estrutura Nova (✅):
```
src/__tests__/unit/functions/
├── array/
│   ├── array-diff.test.ts
│   ├── group-objects.test.ts
│   └── ...
├── object/
│   ├── pick.test.ts
│   └── ...
├── string/
├── utility/
├── format/
└── higher-order/
├── decorators/
│   └── valid-args.decorator.test.ts
└── exceptions/
    └── illegal-argument.exception.test.ts
```

**Subtasks**:
- [ ] Criar estrutura src/__tests__/unit/
- [ ] Mover testes para categorias corretas
- [ ] Atualizar imports em testes
- [ ] Atualizar jest.config.ts paths
- [ ] npm run test:cov (validar cobertura)

---

### Task 3: Criar Abstrações Base e Tipos Comuns
**Prioridade**: ⭐⭐  
**Status**: TODO

```
src/core/
├── index.ts
├── interfaces/
│   ├── validatable.interface.ts
│   ├── transformable.interface.ts
│   └── index.ts
├── types/
│   ├── common.types.ts
│   └── index.ts
└── utils/
    ├── validators.ts
    └── guards.ts
```

**Objetivo**: Reduzir repetição em decoradores e validações

---

### Task 4: Criar Builder Pattern (Opcional)
**Prioridade**: ⭐  
**Status**: TODO

```
src/builders/
├── object-builder.ts
├── array-builder.ts
└── index.ts
```

Exemplo:
```typescript
const result = new ObjectBuilder(obj)
  .pick('a', 'b')
  .merge(other)
  .build();
```

---

### Task 5: Criar Plugin System (Opcional)
**Prioridade**: ⭐  
**Status**: TODO

---

### ✅ Task 6: Criar Documentação de Arquitetura
**Prioridade**: ⭐⭐  
**Status**: 📝 IN_PROGRESS

Arquivos a criar:

**1. src/ARCHITECTURE.md**
- Visão geral da estrutura
- Organização por camadas
- Fluxo de desenvolvimento

**2. src/functions/CATEGORIES.md**
- Descrição de cada categoria
- Quando usar cada função
- Exemplos de uso

**3. src/TESTING.md**
- Estrutura de testes
- Como adicionar novos testes
- Coverage requirements

---

### ✅ Task 7: Atualizar Jest Config
**Prioridade**: ⭐⭐  
**Status**: 🔄 IN_PROGRESS

```typescript
// jest.config.ts
export default {
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/index.ts",
    "!src/**/types/**",
  ],
  testMatch: [
    "src/__tests__/unit/**/*.test.ts",
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  // ...resto da config
};
```

---

## 📈 Timeline Esperada

| Task | Tempo | Complexidade |
|------|-------|-------------|
| 1: Reorganizar Funções | 30min | Baixa |
| 2: Reestruturar Testes | 45min | Média |
| 6: Documentação | 30min | Baixa |
| 7: Jest Config | 15min | Baixa |
| 3: Abstrações Base | 1h | Alta |
| 4: Builders | 45min | Média |
| 5: Plugin System | 1h30m | Alta |

**Total Prioritário (1-2, 6-7)**: ~2 horas  
**Total com Opcionais**: ~5 horas

---

## ✨ Benefícios Esperados

### Imediatos
✅ Melhor navegabilidade (funções agrupadas)  
✅ Estrutura de testes mais clara  
✅ Mais fácil encontrar o que procura  

### Médio Prazo
✅ Escalável (fácil adicionar novas categorias)  
✅ Padrões bem documentados  
✅ Onboarding de novos devs facilitado  

### Longo Prazo
✅ Extensível via padrões (builders, plugins)  
✅ Código reutilizável (abstrações base)  
✅ Manutenibilidade aumentada  

---

## 🚀 Definição de Pronto

**Fase 1 (Reorganização)**:
- [ ] npm run build ✓ (sem erros)
- [ ] npm test ✓ (100% passing)
- [ ] npm run test:cov ✓ (thresholds atingidos)
- [ ] Commits bem documentados

**Fase 2 (Documentação)**:
- [ ] ARCHITECTURE.md criado
- [ ] CATEGORIES.md criado
- [ ] TESTING.md criado
- [ ] README.md atualizado se necessário

**Fase 3 (Validação)**:
- [ ] Nenhum breaking change na API pública
- [ ] TypeScript sem warnings
- [ ] 100% dos testes passando

---

## 📝 Notas

- Manter compatibilidade de API pública (re-exports no index.ts)
- Zero dependências adicionais
- Seguir padrões TypeScript existentes
- Documentar decisões arquiteturais

