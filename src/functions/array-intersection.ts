import { IllegalArgumentException } from "@/exceptions";

/**
 * This function returns the intersection between two arrays.
 *
 * @param arr1 Array of strings or numbers.
 * @param arr2 Array of strings or numbers.
 * @returns Array with the intersection between two arrays.
 */
const arrayIntersection = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): Array<T> => {
  if (!arr1 && !arr2) {
    throw new IllegalArgumentException(`Both arrays are invalid!`);
  }

  if (!arr1 || arr1.length === 0) {
    return [];
  }

  if (!arr2 || arr2.length === 0) {
    return [];
  }

  const intersection = arr1.filter((value: T) => arr2.includes(value));

  return intersection;
};

export default arrayIntersection;
