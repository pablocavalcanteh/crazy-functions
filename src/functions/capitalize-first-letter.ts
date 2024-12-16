import { IllegalArgumentException } from "@/exceptions";

/**
 * This function capitalize the first letter of word.
 *
 * @param word Word to capitalize the first letter.
 * @returns Word with the first letter capitalized.
 */
const capitalizeFirstLetter = (word: string): string => {
  if (typeof word !== "string" || word.length === 0) {
    throw new IllegalArgumentException("Argument is not a string or is an empty string");
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default capitalizeFirstLetter;
