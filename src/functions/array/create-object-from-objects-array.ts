import { IllegalArgumentException } from "@/exceptions";

/**
 * This function returns an object with all properties of the objects array.
 *
 * @param initialObject Initial object.
 * @param arr Array of objects.
 * @returns Object with all the properties of all the objects in the array passed as a parameter.
 */
const createObjectFromObjectsArray = (
  initialObject: object = {},
  arr: Array<{ [key: string]: any }>
): object => {
  if (!initialObject) {
    throw new IllegalArgumentException(`Invalid argument: initialObject`);
  }

  if (!arr || arr.length === 0) {
    return initialObject;
  }

  const obj = arr.reduce((acc: object, item: { [key: string]: any }) => {
    if (!item) {
      return acc;
    }

    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        // @ts-ignore
        acc[key] = item[key];
      }
    }

    return acc;
  }, initialObject);

  return obj;
};

export default createObjectFromObjectsArray;
