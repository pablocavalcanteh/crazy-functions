import { IllegalArgumentException } from "@/exceptions";

/**
 * Shuffle an array
 * @param arr - The array to shuffle
 * @param fn - The function to sort the array
 * @returns The shuffled array
 * @throws IllegalArgumentException when the first parameter is not an array
 */

const shuffle = (arr: any[], fn: (() => number) | undefined = undefined): any[] => {


    if (!Array.isArray(arr)) {
        throw new IllegalArgumentException("The first parameter should be an array");
    }

    const arrayClone = structuredClone(arr);

    if (fn) {
        return arrayClone.sort(fn);
    }
    return arrayClone.sort(() => Math.random() - 0.5);
};

export default shuffle;
