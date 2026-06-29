import { IllegalArgumentException } from "@/exceptions";

/**
 * This function returns an array with defined range.
 *
 * @param start Initial value of range.
 * @param end Final velue of range.
 * @returns Array with range.
 */
const range = (start: number, end: number): Array<number> => {
  if (!start) {
    throw new IllegalArgumentException(`Start is null or undefined!`);
  }

  if (!end) {
    throw new IllegalArgumentException(`End is null or undefined!`);
  }

  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export default range;
