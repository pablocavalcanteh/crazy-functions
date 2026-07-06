import { getNestedProperty } from '@/functions';

describe('getNestedProperty', () => {
  it('should get existing nested property', () => {
    const obj = { a: { b: { c: 42 } } };

    expect(getNestedProperty(obj, 'a.b.c', 0)).toBe(42);
  });

  it('should return default for non-existing property', () => {
    const obj = { a: { b: { c: 42 } } };

    expect(getNestedProperty(obj, 'a.b.d', 0)).toBe(0);
  });

  it('should handle null or undefined in path', () => {
    const obj = {
      a: {
        b: null,
      },
    };

    expect(getNestedProperty(obj, 'a.b.c', 'fallback')).toBe('fallback');
    expect(getNestedProperty({ a: undefined }, 'a.b', 'fallback')).toBe('fallback');
  });

  it('should work with deep nesting', () => {
    const obj = {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: {
                value: 'deep',
              },
            },
          },
        },
      },
    };

    expect(getNestedProperty(obj, 'level1.level2.level3.level4.level5.value')).toBe('deep');
  });

  it('should handle numeric keys', () => {
    const obj = {
      items: [
        { name: 'first' },
        { name: 'second' },
      ],
    };

    expect(getNestedProperty(obj, 'items.1.name')).toBe('second');
  });
});
