/**
 * Creates an object with only the specified keys
 * @param obj - The source object
 * @param keys - Keys to pick
 * @returns Object with only the specified keys
 */
function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Partial<T> {
  const result: Partial<T> = {};

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

export default pick;
