# 🎯 Funções Sugeridas para Crazy Functions

## 📊 Análise de Gaps por Categoria

### ✅ Array Functions (13 existentes)

**Sugestões de Complemento:**

1. **`findByProperty(arr, key, value)`** ⭐⭐⭐
   - Encontra primeiro elemento que tem propriedade com valor específico
   ```typescript
   findByProperty([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 1)
   // → {id: 1, name: 'John'}
   ```

2. **`filterByProperty(arr, key, value)`** ⭐⭐⭐
   - Filtra elementos por propriedade
   ```typescript
   filterByProperty(users, 'role', 'admin')
   // → [user1, user2, ...]
   ```

3. **`removeDuplicatesByProperty(arr, key)`** ⭐⭐⭐
   - Remove duplicatas baseado em propriedade
   ```typescript
   removeDuplicatesByProperty([{id:1},{id:1},{id:2}], 'id')
   // → [{id:1},{id:2}]
   ```

4. **`sumByProperty(arr, key)`** ⭐⭐
   - Soma valores de propriedade
   ```typescript
   sumByProperty(items, 'price')
   // → 1500
   ```

5. **`averageByProperty(arr, key)`** ⭐⭐
   - Calcula média de propriedade
   ```typescript
   averageByProperty(grades, 'score')
   // → 7.5
   ```

6. **`maxByProperty(arr, key)`** ⭐⭐
   - Encontra máximo valor de propriedade
   ```typescript
   maxByProperty(users, 'age')
   // → {name: 'John', age: 45}
   ```

7. **`minByProperty(arr, key)`** ⭐⭐
   - Encontra mínimo valor de propriedade
   ```typescript
   minByProperty(products, 'price')
   // → {name: 'item', price: 10}
   ```

8. **`zipArrays(...arrays)`** ⭐⭐
   - Combina múltiplos arrays em pares
   ```typescript
   zipArrays([1, 2], ['a', 'b'])
   // → [[1, 'a'], [2, 'b']]
   ```

9. **`unzipArray(arr)`** ⭐⭐
   - Separa array de pares em múltiplos arrays
   ```typescript
   unzipArray([[1, 'a'], [2, 'b']])
   // → [[1, 2], ['a', 'b']]
   ```

10. **`indexOfByProperty(arr, key, value)`** ⭐⭐
    - Encontra índice por propriedade
    ```typescript
    indexOfByProperty(users, 'id', 5)
    // → 3
    ```

---

### ✅ Object Functions (6 existentes)

**Sugestões de Complemento:**

1. **`getNestedProperty(obj, path, defaultValue)`** ⭐⭐⭐
   - Obtém valor de propriedade aninhada com segurança
   ```typescript
   getNestedProperty({a: {b: 1}}, 'a.b.c', 'default')
   // → 'default'
   ```

2. **`setNestedProperty(obj, path, value)`** ⭐⭐⭐
   - Define valor em propriedade aninhada
   ```typescript
   setNestedProperty({}, 'a.b.c', 42)
   // → {a: {b: {c: 42}}}
   ```

3. **`hasNestedProperty(obj, path)`** ⭐⭐⭐
   - Verifica se propriedade aninhada existe
   ```typescript
   hasNestedProperty({a: {b: {c: 1}}}, 'a.b.c')
   // → true
   ```

4. **`deleteNestedProperty(obj, path)`** ⭐⭐
   - Deleta propriedade aninhada
   ```typescript
   deleteNestedProperty({a: {b: 1, c: 2}}, 'a.b')
   // → {a: {c: 2}}
   ```

5. **`flattenObject(obj, prefix = '')`** ⭐⭐
   - Achata objeto aninhado
   ```typescript
   flattenObject({a: {b: 1, c: 2}})
   // → {'a.b': 1, 'a.c': 2}
   ```

6. **`unflattenObject(obj)`** ⭐⭐
   - Desachata objeto
   ```typescript
   unflattenObject({'a.b': 1, 'a.c': 2})
   // → {a: {b: 1, c: 2}}
   ```

7. **`keysToCase(obj, caseType)`** ⭐⭐
   - Converte chaves para camelCase, snake_case, etc
   ```typescript
   keysToCase({first_name: 'John'}, 'camel')
   // → {firstName: 'John'}
   ```

---

### ✅ String Functions (2 existentes)

**Sugestões de Complemento:**

1. **`camelCase(str)`** ⭐⭐⭐
   - Converte para camelCase
   ```typescript
   camelCase('hello-world-foo')
   // → 'helloWorldFoo'
   ```

2. **`snakeCase(str)`** ⭐⭐⭐
   - Converte para snake_case
   ```typescript
   snakeCase('helloWorldFoo')
   // → 'hello_world_foo'
   ```

3. **`kebabCase(str)`** ⭐⭐⭐
   - Converte para kebab-case
   ```typescript
   kebabCase('helloWorldFoo')
   // → 'hello-world-foo'
   ```

4. **`pascalCase(str)`** ⭐⭐⭐
   - Converte para PascalCase
   ```typescript
   pascalCase('hello-world')
   // → 'HelloWorld'
   ```

5. **`truncate(str, length, suffix)`** ⭐⭐⭐
   - Trunca string com sufixo
   ```typescript
   truncate('hello world', 7, '...')
   // → 'hello...'
   ```

6. **`reverse(str)`** ⭐⭐
   - Reverte string
   ```typescript
   reverse('hello')
   // → 'olleh'
   ```

7. **`repeat(str, times)`** ⭐⭐
   - Repete string
   ```typescript
   repeat('ab', 3)
   // → 'ababab'
   ```

8. **`padStart(str, length, char)`** ⭐⭐
   - Preenche início de string
   ```typescript
   padStart('5', 3, '0')
   // → '005'
   ```

9. **`padEnd(str, length, char)`** ⭐⭐
   - Preenche fim de string
   ```typescript
   padEnd('5', 3, '0')
   // → '500'
   ```

10. **`template(str, vars)`** ⭐⭐⭐
    - String template simples
    ```typescript
    template('Hello {name}', {name: 'John'})
    // → 'Hello John'
    ```

---

### ✅ Utility Functions (1 existente)

**Sugestões de Complemento:**

1. **`isNullOrUndefined(value)`** ⭐⭐⭐
   - Verifica ambos
   ```typescript
   isNullOrUndefined(null) // → true
   isNullOrUndefined(undefined) // → true
   ```

2. **`isType(value, type)`** ⭐⭐⭐
   - Verifica tipo com precisão
   ```typescript
   isType([], 'array') // → true
   isType({}, 'object') // → true
   ```

3. **`isValidEmail(email)`** ⭐⭐⭐
   - Valida email (regex simples)
   ```typescript
   isValidEmail('john@example.com')
   // → true
   ```

4. **`isValidUrl(url)`** ⭐⭐⭐
   - Valida URL

5. **`isNull(value)`** ⭐⭐
   - Verifica se é exatamente null

6. **`isUndefined(value)`** ⭐⭐
   - Verifica se é undefined

7. **`isDefined(value)`** ⭐⭐
   - Oposto de isEmpty

---

### ✅ Format Functions (1 existente)

**Sugestões de Complemento:**

1. **`formatDate(date, format)`** ⭐⭐⭐
   - Formata data
   ```typescript
   formatDate(new Date(), 'dd/mm/yyyy')
   // → '06/07/2026'
   ```

2. **`formatBytes(bytes)`** ⭐⭐⭐
   - Formata bytes em legível
   ```typescript
   formatBytes(1024)
   // → '1 KB'
   ```

3. **`formatNumber(num, options)`** ⭐⭐
   - Formata número com separadores
   ```typescript
   formatNumber(1000000, {separator: ','})
   // → '1,000,000'
   ```

4. **`formatPercent(value, decimals)`** ⭐⭐
   - Formata percentual
   ```typescript
   formatPercent(0.75, 2)
   // → '75.00%'
   ```

5. **`formatPhone(phone, format)`** ⭐⭐
   - Formata telefone
   ```typescript
   formatPhone('11999999999', 'BR')
   // → '(11) 99999-9999'
   ```

---

### ✅ Higher-Order Functions (3 existentes)

**Sugestões de Complemento:**

1. **`pipe(...fns)`** ⭐⭐⭐
   - Compõe funções (left to right)
   ```typescript
   const process = pipe(trim, toLowerCase, capitalize);
   process('  HELLO  ')
   ```

2. **`compose(...fns)`** ⭐⭐⭐
   - Compõe funções (right to left)
   ```typescript
   const process = compose(capitalize, toLowerCase, trim);
   process('  HELLO  ')
   ```

3. **`once(fn)`** ⭐⭐⭐
   - Função que executa apenas 1 vez
   ```typescript
   const initialize = once(initApp);
   initialize(); // executa
   initialize(); // não faz nada
   ```

4. **`throttle(fn, delay)`** ⭐⭐⭐
   - Limita chamadas a cada N ms
   ```typescript
   const throttled = throttle(handleScroll, 1000);
   window.addEventListener('scroll', throttled);
   ```

5. **`retry(fn, times, delay)`** ⭐⭐⭐
   - Retenta função N vezes
   ```typescript
   await retry(fetchData, 3, 1000)
   // Tenta 3 vezes com 1s entre tentativas
   ```

6. **`timeout(fn, ms)`** ⭐⭐
   - Rejeita se ultrapassar timeout
   ```typescript
   await timeout(slowFetch(), 5000)
   // Falha se > 5s
   ```

7. **`negate(fn)`** ⭐⭐
   - Inverte resultado booleano
   ```typescript
   const isEven = (n) => n % 2 === 0;
   const isOdd = negate(isEven);
   ```

---

## 🎯 Plano de Implementação

### Wave 1 (1.3.0) - CORE UTILITIES - ALTA PRIORIDADE
**Impacto**: Alto | **Tempo**: 8-10h | **Funções**: 7

```typescript
// Array: 1 função
✓ removeDuplicatesByProperty

// Object: 2 funções
✓ getNestedProperty
✓ setNestedProperty

// String: 3 funções
✓ camelCase
✓ snakeCase
✓ kebabCase

// Higher-Order: 2 funções
✓ pipe
✓ compose

// Summary: 27 → 34 funções
```

### Wave 2 (1.4.0) - EXTENDED UTILITIES - MÉDIA PRIORIDADE
**Impacto**: Médio | **Tempo**: 10-12h | **Funções**: 10

```typescript
// Array: 4 funções
✓ findByProperty
✓ filterByProperty
✓ sumByProperty
✓ averageByProperty

// String: 2 funções
✓ truncate
✓ pascalCase

// Format: 2 funções
✓ formatBytes
✓ formatDate

// Higher-Order: 2 funções
✓ once
✓ throttle

// Summary: 34 → 44 funções
```

### Wave 3 (1.5.0) - ADVANCED FEATURES - BAIXA PRIORIDADE
**Impacto**: Baixo | **Tempo**: 8-10h | **Funções**: 12+

```typescript
// Array: 4 funções
✓ maxByProperty
✓ minByProperty
✓ zipArrays
✓ unzipArray

// Object: 3 funções
✓ flattenObject
✓ unflattenObject
✓ hasNestedProperty

// Utility: 3 funções
✓ isValidEmail
✓ isValidUrl
✓ isType

// Higher-Order: 2 funções
✓ retry
✓ timeout

// Summary: 44 → 56+ funções
```

---

## 📊 Resumo Geral

| Wave | Versão | Funções | Tempo | Status |
|------|--------|---------|-------|--------|
| 1 | 1.3.0 | 7 (27→34) | 8-10h | 📋 Planejado |
| 2 | 1.4.0 | 10 (34→44) | 10-12h | 📋 Planejado |
| 3 | 1.5.0 | 12+ (44→56) | 8-10h | 📋 Planejado |

**Total**: 29+ novas funções | **Tempo Total**: ~30 horas | **Crescimento**: 27 → 56+ funções

---

## ✨ Conclusão

Essas sugestões foram elaboradas considerando:
- ✅ **Padrões comuns** em utilitários JavaScript/TypeScript
- ✅ **Demanda real** de desenvolvedores
- ✅ **Compatibilidade** com arquitetura atual
- ✅ **Escalabilidade** sem quebrar existentes
- ✅ **Zero dependências** externas

**Recomendação**: Começar com **Wave 1 (1.3.0)** nas próximas 2-3 sprints.
