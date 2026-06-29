import { flatten } from '@/functions';

describe('flatten', () => {
  it('should flatten nested arrays', () => {
    const arr = [1, [2, [3, 4]]];
    const result = flatten(arr);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should respect depth parameter', () => {
    const arr = [1, [2, [3, 4]]];
    const result = flatten(arr, 1);
    expect(result).toEqual([1, 2, [3, 4]]);
  });

  it('should handle empty arrays', () => {
    expect(flatten([])).toEqual([]);
  });
});
