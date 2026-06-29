import { compact } from '@/functions';

describe('compact', () => {
  it('should remove falsy values', () => {
    const arr = [1, 0, false, 2, '', null, 3, undefined, 'hello'];
    const result = compact(arr);
    expect(result).toEqual([1, 2, 3, 'hello']);
  });

  it('should handle empty arrays', () => {
    expect(compact([])).toEqual([]);
  });

  it('should handle arrays with only falsy values', () => {
    expect(compact([0, false, '', null, undefined])).toEqual([]);
  });
});
