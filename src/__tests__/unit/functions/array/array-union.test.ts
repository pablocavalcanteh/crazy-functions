import { arrayUnion } from '@/functions';

describe("array union function", () => {
  it("should return an array with the union of two arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const result = arrayUnion(array1, array2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should throw an exception when both arrays are invalid", () => {
    // @ts-ignore
    expect(() => arrayUnion(null, undefined)).toThrow("Both arrays are invalid!");
  });

  it("should return the second array when the first array is invalid", () => {
    // @ts-ignore
    expect(arrayUnion(null, [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should return the first array when the second array is invalid", () => {
    // @ts-ignore
    expect(arrayUnion([1, 2, 3], null)).toEqual([1, 2, 3]);
  });
});
