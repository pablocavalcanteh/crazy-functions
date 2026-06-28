import pick from '@/functions/pick';

describe('pick', () => {
  it('should pick specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, 'a', 'c');
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should handle non-existent keys', () => {
    const obj = { a: 1, b: 2 };
    const result = pick(obj, 'a', 'd' as any);
    expect(result).toEqual({ a: 1 });
  });
});
