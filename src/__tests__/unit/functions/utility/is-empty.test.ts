import { isEmpty } from '@/functions';

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  it('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty values', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for primitive values that are not empty containers', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(true)).toBe(false);
  });
});
