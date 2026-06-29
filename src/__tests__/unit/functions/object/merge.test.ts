import { merge } from '@/functions';

describe('merge', () => {
  it('should return the target when no sources are provided', () => {
    const target = { a: 1, b: 2 };

    expect(merge(target)).toEqual(target);
  });

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

  it('should ignore inherited properties from sources', () => {
    const source = Object.create({ inherited: 2 });
    source.own = 1;

    expect(merge({}, source)).toEqual({ own: 1 });
  });
});
