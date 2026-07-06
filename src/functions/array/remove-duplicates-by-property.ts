/**
 * Removes duplicate objects from array based on property value
 * @template T - The array element type
 * @param arr - The array of objects
 * @param key - The property key to check for duplicates
 * @returns Array with duplicates removed (keeps first occurrence)
 * @example
 * removeDuplicatesByProperty([{id:1,name:'John'},{id:1,name:'John'},{id:2,name:'Jane'}], 'id')
 * // → [{id:1,name:'John'},{id:2,name:'Jane'}]
 */
export default function removeDuplicatesByProperty<T extends Record<string, any>>(
  arr: T[],
  key: keyof T,
): T[] {
  const seen = new Set<T[keyof T]>();

  return arr.filter((item) => {
    const value = item[key];

    if (seen.has(value)) {
      return false;
    }

    seen.add(value);
    return true;
  });
}
