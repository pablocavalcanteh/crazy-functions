import chunk from '@/functions/chunk';

describe('chunk', () => {
  it('should split array into chunks', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = chunk(arr, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle exact division', () => {
    const arr = [1, 2, 3, 4];
    const result = chunk(arr, 2);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it('should throw error for invalid chunk size', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow();
    expect(() => chunk([1, 2, 3], -1)).toThrow();
  });
});
