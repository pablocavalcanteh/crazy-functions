import { intersection } from '@/functions';

describe("array intersection function", () => {
  it("should return an array with the intersection of two arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const result = intersection(array1, array2);
    expect(result).toEqual([3, 4, 5]);
  });

  it("should throw an exception when both arrays are invalid", () => {
    // @ts-ignore
    expect(() => intersection(null, undefined)).toThrow("Both arrays are invalid!");
  });

  it("should return an empty array when the first array is empty", () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
  });

  it("should return an empty array when the second array is empty", () => {
    expect(intersection([1, 2, 3], [])).toEqual([]);
  });
});
