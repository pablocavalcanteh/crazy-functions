import { diff } from '@/functions';

describe("diff", () => {
  it("should return an array of numbers with the difference of two arrays of numbers", () => {
    const result = diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
    expect(result).toEqual([1, 2]);
  });

  it("should throw an exception whe first array of numbers is null", () => {
    // @ts-ignore
    expect(() => diff(null, [3, 4, 5, 6, 7])).toThrow(
      "First array arr1 is invalid!"
    );
  });

  it("should return an empty array of numbers when first array of numbers is empty ", () => {
    expect(diff([], [3, 4, 5, 6, 7])).toEqual([]);
  });

  it("should return the first array when second array is empty", () => {
    expect(diff([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("should return an array of strings with the difference of two arrays of strings", () => {
    expect(diff(["a", "b", "c"], ["c"])).toEqual(["a", "b"]);
  });
});
