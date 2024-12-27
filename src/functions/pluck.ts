import { IllegalArgumentException } from "@/exceptions";
import { NonEmptyArray } from "@/types";

/**
 * This function returns the value of the last property passed as a parameter.
 *
 * @param obj Object to get the property.
 * @param keys List of properties to get from the object.
 * @returns Value of the last property.
 * @throws {IllegalArgumentException} If the first argument is not an object, if the data is an array, or if the property does not exist.
 */
const pluck = (obj: object, ...keys: NonEmptyArray<string>): any => {
  if (obj === null || typeof obj !== "object") {
    throw new IllegalArgumentException("First argument must be an object!");
  }

  let newObj: object | any[] = structuredClone(obj);

  for (let key of keys) {
    const IS_ARRAY = Array.isArray(newObj);

    if (IS_ARRAY) {
      throw new IllegalArgumentException("Data is an array!");
    }
    if (!newObj.hasOwnProperty(key)) {
      throw new IllegalArgumentException(
        `Property ${key} does not exist in the object!`
      );
    }

    newObj = (newObj as { [key: string]: any })[key];
  }

  return newObj;
};

export default pluck;
