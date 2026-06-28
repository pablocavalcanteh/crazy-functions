import unique from '@/functions/unique';

describe('unique', () => {
  it('should return unique numbers', () => {
    const result = unique([1, 2, 2, 3, 3, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return unique strings', () => {
    const result = unique(['a', 'b', 'b', 'c']);
    expect(result.sort()).toEqual(['a', 'b', 'c']);
  });

  it('should handle empty arrays', () => {
    expect(unique([])).toEqual([]);
  });
});
