import { omit } from '@/functions';

describe('omit', () => {
  it('should omit specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, 'b');
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should handle multiple keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, 'a', 'c');
    expect(result).toEqual({ b: 2 });
  });
});
