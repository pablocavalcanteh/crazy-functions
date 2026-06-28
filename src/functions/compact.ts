/**
 * Removes falsy values from an array
 * @param arr - The array to compact
 * @returns Array with falsy values removed
 */
function compact<T>(arr: (T | null | undefined | false | 0 | '')[]): T[] {
  return arr.filter((item) => {
    return item !== null && item !== undefined && item !== false && item !== 0 && item !== '';
  }) as T[];
}

export default compact;
