/**
 * Returns unique values from an array
 * @param arr - The array to get unique values from
 * @returns Array with unique values
 */
function unique<T extends string | number>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export default unique;
