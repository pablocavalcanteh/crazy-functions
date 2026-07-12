import { IllegalArgumentException } from "@/exceptions";
import { NonEmptyArray } from "@/types";

function removeProperties(obj: object, keysArray: NonEmptyArray<string>): object;
function removeProperties(obj: object, ...keys: NonEmptyArray<string>): object;

/**
 * Removes properties from an object
 * @param obj - Object to remove properties from
 * @param ...args - List of property keys to remove from the object
 * @returns Object without the specified properties
 * @throws {IllegalArgumentException} If the first argument is not an object or if no key is provided
 * @example
 * removeProperties({a: 1, b: 2, c: 3}, 'b', 'c') // → {a: 1}
 */
function removeProperties(obj: object, ...args: any[]): object {
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
  }

  return obj;
}

export default removeProperties;
