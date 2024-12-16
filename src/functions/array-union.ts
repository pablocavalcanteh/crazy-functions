import { IllegalArgumentException } from "@/exceptions";

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
