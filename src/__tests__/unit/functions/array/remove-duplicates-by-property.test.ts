import { removeDuplicatesByProperty } from '@/functions';

describe('removeDuplicatesByProperty', () => {
  it('should remove duplicates by id', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 1, name: 'Johnny' },
      { id: 2, name: 'Jane' },
    ];

    expect(removeDuplicatesByProperty(users, 'id')).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]);
  });

  it('should handle empty array', () => {
    expect(removeDuplicatesByProperty([], 'id')).toEqual([]);
  });

  it('should handle array with no duplicates', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Mary' },
    ];

    expect(removeDuplicatesByProperty(users, 'id')).toEqual(users);
  });

  it('should handle array with all duplicates', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 1, name: 'Jane' },
      { id: 1, name: 'Mary' },
    ];

    expect(removeDuplicatesByProperty(users, 'id')).toEqual([{ id: 1, name: 'John' }]);
  });

  it('should preserve order by keeping the first occurrence', () => {
    const users = [
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 2, name: 'Janet' },
      { id: 3, name: 'Mary' },
      { id: 1, name: 'Johnny' },
    ];

    expect(removeDuplicatesByProperty(users, 'id')).toEqual([
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Mary' },
    ]);
  });
});
