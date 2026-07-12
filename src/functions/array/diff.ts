import { IllegalArgumentException } from "@/exceptions";

/**
 * Returns the difference between two arrays.
 * @template T - The array element type
 * @param arr1 - First array of strings or numbers
 * @param arr2 - Second array of strings or numbers
 * @returns Array with elements in arr1 but not in arr2
 * @example
 * diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]) // → [1, 2]
 */
const diff = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): Array<T> => {
  if (!arr1) {
    throw new IllegalArgumentException(`First array arr1 is invalid!`);
  }

  if (arr1.length === 0) {
    return [];
  }

  if (!arr2 || arr2.length === 0) {
    return arr1;
  }

  const result = arr1.filter((value: T) => !arr2.includes(value));

  return result;
};

export default diff;
