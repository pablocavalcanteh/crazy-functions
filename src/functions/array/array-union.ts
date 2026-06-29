import { IllegalArgumentException } from "@/exceptions";

/**
 * This function returns the union between two arrays.
 *
 * @param arr1 Array of strings or numbers.
 * @param arr2 Array of strings or numbers.
 * @returns Array with the union between two arrays.
 */
const arrayUnion = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): Array<T> => {
    
  if (!arr1 && !arr2) {
    throw new IllegalArgumentException(`Both arrays are invalid!`);
  }

  if (!arr1) {
    return arr2;
  }

  if (!arr2) {
    return arr1;
  }

  const union = [...new Set([...arr1, ...arr2])];

  return union;
};

export default arrayUnion;
