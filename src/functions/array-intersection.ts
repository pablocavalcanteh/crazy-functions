import { IllegalArgumentException } from "@/exceptions";

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
