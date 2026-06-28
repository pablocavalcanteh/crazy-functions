/**
 * Creates an object without the specified keys
 * @param obj - The source object
 * @param keys - Keys to omit
 * @returns Object without the specified keys
 */
function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Partial<T> {
  const result: Partial<T> = { ...obj };
  const keysToOmit = new Set(keys);

  for (const key of keysToOmit) {
    delete result[key];
  }

  return result;
}

export default omit;
