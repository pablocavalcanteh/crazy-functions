/**
 * Sets a nested property value in an object, creating intermediate objects as needed
 * @template T - The object type
 * @param obj - The object to modify
 * @param path - Dot notation path (e.g., 'a.b.c')
 * @param value - The value to set
 * @returns The modified object
 * @example
 * setNestedProperty({}, 'a.b.c', 42) // → {a: {b: {c: 42}}}
 * setNestedProperty({a: {x: 1}}, 'a.b.c', 42) // → {a: {x: 1, b: {c: 42}}}
 */
export default function setNestedProperty<T extends Record<string, any>>(
  obj: T,
  path: string,
  value: any,
): T {
  const keys = path.split('.');
  let current: Record<string, any> = obj;

  for (let index = 0; index < keys.length - 1; index++) {
    const key = keys[index];

    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return obj;
}
