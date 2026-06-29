/**
 * Splits an array into chunks of a specified size
 * @param arr - The array to chunk
 * @param size - The size of each chunk
 * @returns Array of chunks
 */
function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0 || size > arr.length) {
    throw new Error('Chunk size must be greater than 0 and less than or equal to the array length');
  }

  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default chunk;
