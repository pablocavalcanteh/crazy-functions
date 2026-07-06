/**
 * Safely gets a nested property value from an object using dot notation
 * @template T - The object type
 * @template D - The default value type
 * @param obj - The object to access
 * @param path - Dot notation path (e.g., 'a.b.c')
 * @param defaultValue - Value to return if path doesn't exist
 * @returns The value at path or defaultValue
 * @example
 * getNestedProperty({a: {b: {c: 42}}}, 'a.b.c', 0) // → 42
 * getNestedProperty({a: {b: {c: 42}}}, 'a.b.d', 0) // → 0
 */
export default function getNestedProperty<T extends Record<string, any>, D = undefined>(
  obj: T,
  path: string,
  defaultValue?: D,
): any {
  const keys = path.split('.');
  let value: any = obj;

  for (const key of keys) {
    if (value == null) {
      return defaultValue;
    }

    value = value[key];
  }

  return value ?? defaultValue;
}
