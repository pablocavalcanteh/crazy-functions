import merge from '@/functions/merge';

describe('merge', () => {
  it('should merge objects', () => {
    const target = { a: 1, b: 2 };
    const source = { c: 3 };
    const result = merge(target, source);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should deep merge nested objects', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    const result = merge(target, source);
    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });

  it('should handle multiple sources', () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    const result = merge(target, source1, source2);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });
});
