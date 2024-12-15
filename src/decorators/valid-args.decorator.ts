import { IllegalArgumentException } from "@/exceptions";

const validArgs = (fn: Function): any => {
  return (arr: any[], propertyName: string) => {
    if (!arr) {
      throw new IllegalArgumentException(`Array is null or undefined!`);
    }
    if (arr.length == 0) {
      throw new IllegalArgumentException(`Array is empty!`);
    }

    if (!propertyName) {
      throw new IllegalArgumentException(`Property name is null or undefined!`);
    }

    return fn(arr, propertyName);
  };
};

export default validArgs;
