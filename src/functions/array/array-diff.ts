import { IllegalArgumentException } from "@/exceptions";

/**
 * This function returns the difference between two arrays.
 *
 * @param arr1 Array of strings or numbers.
 * @param arr2 Array of strings or numbers.
 * @returns Array with the difference between two arrays.
 */
const arrayDiff = <T extends string | number>(
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

  const diff = arr1.filter((value: T) => !arr2.includes(value));

  return diff;
};

export default arrayDiff;
