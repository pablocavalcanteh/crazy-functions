import { IllegalArgumentException } from "@/exceptions";

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @template T - The array element type
 * @param arr - The array to shuffle
 * @param fn - Optional custom comparator function (legacy, ignored with Fisher-Yates)
 * @returns A new shuffled array (original array is not modified)
 * @throws IllegalArgumentException when the first parameter is not an array
 * @example
 * shuffle([1, 2, 3, 4, 5]) // → [3, 1, 4, 2, 5] (random order)
 */
const shuffle = <T>(arr: T[], fn?: (() => number) | undefined): T[] => {
  if (!Array.isArray(arr)) {
    throw new IllegalArgumentException("The first parameter should be an array");
  }

  const arrayClone = structuredClone(arr);

  // Fisher-Yates shuffle algorithm
  // Guarantees a truly random shuffle with O(n) complexity
  for (let i = arrayClone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at positions i and j
    [arrayClone[i], arrayClone[j]] = [arrayClone[j], arrayClone[i]];
  }

  return arrayClone;
};

export default shuffle;
