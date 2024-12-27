import { IllegalArgumentException } from "@/exceptions";
import { NonEmptyArray } from "@/types";

function remove(obj: object, keysArray: NonEmptyArray<string>): object;
function remove(obj: object, ...keys: NonEmptyArray<string>): object;

/**
 * This function removes the last property of the object passed as a parameter.
 *
 * @param obj Object to remove the property.
 * @param ...args List of properties to remove from the object.
 * @returns Object without the specified properties.
 * @throws {IllegalArgumentException} If the first argument is not an object or if no key is provided.
 */
function remove(obj: object, ...args: any[]): object {
  if (obj === null || typeof obj !== "object") {
    throw new IllegalArgumentException("First argument must be an object!");
  }

  if (args.length === 0) {
    throw new IllegalArgumentException("At least one key must be provided!");
  }

  if (Array.isArray(args[0])) {
    const keysArray = args[0] as string[];

    for (let key of keysArray) {
      delete (obj as { [key: string]: any })[key];
    }

    return obj;
  }

  if (typeof args[0] === "string") {
    let objRef = obj;

    for (let key of args as string[]) {
      if (key === args[args.length - 1]) {
        delete (objRef as { [key: string]: any })[key];
        return obj;
      }

      objRef = (objRef as { [key: string]: any })[key];
    }

    return obj;
  }

  return obj;
}

export default remove;
