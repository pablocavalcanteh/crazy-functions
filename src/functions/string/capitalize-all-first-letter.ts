import { IllegalArgumentException } from "@/exceptions";

/**
 * This function capitalize all the first letter of words.
 *
 * @param words Array of strings or numbers.
 * @returns Array of strings with the first letter capitalized.
 */
const capitalizeAllFirstLetter = (words: Array<string>): Array<string> => {
  if (!Array.isArray(words)) {
    throw new IllegalArgumentException("Argument is not an array");
  }

  return words.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
};

export default capitalizeAllFirstLetter;
