/**
 * Composes functions left-to-right (executes first function first)
 * @template T - The input type
 * @param functions - Functions to compose
 * @returns A function that applies all functions in sequence
 * @example
 * const addOne = (n: number) => n + 1;
 * const double = (n: number) => n * 2;
 * const pipeline = pipe(addOne, double);
 * pipeline(5) // → 12 ((5 + 1) * 2)
 */
export default function pipe<T>(
  ...functions: Array<(arg: any) => any>
): (arg: T) => any {
  return (arg: T) => functions.reduce((result, fn) => fn(result), arg);
}
