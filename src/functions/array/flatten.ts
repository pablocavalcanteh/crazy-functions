/**
 * Flattens a nested array
 * @param arr - The array to flatten
 * @param depth - The depth to flatten (default: Infinity)
 * @returns Flattened array
 */
function flatten<T>(arr: any[], depth: number = Infinity): T[] {
  if (depth < 1) {
    return arr as T[];
  }

  return arr.reduce((acc: T[], item: any) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item, depth - 1));
    }
    return acc.concat(item);
  }, []);
}

export default flatten;
