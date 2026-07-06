import { pipe } from '@/functions';

describe('pipe', () => {
  it('should pipe a single function', () => {
    const addOne = (value: number) => value + 1;

    expect(pipe(addOne)(5)).toBe(6);
  });

  it('should pipe multiple functions', () => {
    const addOne = (value: number) => value + 1;
    const double = (value: number) => value * 2;
    const subtractThree = (value: number) => value - 3;

    expect(pipe(addOne, double, subtractThree)(5)).toBe(9);
  });

  it('should pipe functions with different types', () => {
    const toUpperCase = (value: string) => value.toUpperCase();
    const toArray = (value: string) => value.split('');
    const getLength = (value: string[]) => value.length;

    expect(pipe(toUpperCase, toArray, getLength)('hello')).toBe(5);
  });

  it('should respect left-to-right execution order', () => {
    const addPrefix = (value: string) => `start-${value}`;
    const addSuffix = (value: string) => `${value}-end`;

    expect(pipe(addPrefix, addSuffix)('middle')).toBe('start-middle-end');
  });
});
