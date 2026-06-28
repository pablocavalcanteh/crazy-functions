import memoize from '@/functions/memoize';

describe('memoize', () => {
  it('should cache function results', () => {
    let callCount = 0;
    const fn = (a: number, b: number) => {
      callCount++;
      return a + b;
    };
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(callCount).toBe(1);
  });

  it('should handle different arguments', () => {
    let callCount = 0;
    const fn = (a: number) => {
      callCount++;
      return a * 2;
    };
    const memoized = memoize(fn);

    expect(memoized(5)).toBe(10);
    expect(memoized(10)).toBe(20);
    expect(callCount).toBe(2);
  });
});
