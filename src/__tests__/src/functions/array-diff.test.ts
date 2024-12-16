import { arrayDiff } from "../../../functions";

describe("arrayDiff function", () => {
  it("should return an array of numbers with the difference of two arrays of numbers", () => {
    const result = arrayDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
    expect(result).toEqual([1, 2]);
  });

  it("should throw an exception whe first array of numbers is null", () => {
    // @ts-ignore
    expect(() => arrayDiff(null, [3, 4, 5, 6, 7])).toThrow(
      "First array arr1 is invalid!"
    );
  });

  it("should return an empty array of numbers when first array of numbers is empty ", () => {
    expect(arrayDiff([], [3, 4, 5, 6, 7])).toEqual([]);
  });

  it("should return an array of strings with the difference of two arrays of strings", () => {
    expect(arrayDiff(["a", "b", "c"], ["c"])).toEqual(["a", "b"]);
  });
});
