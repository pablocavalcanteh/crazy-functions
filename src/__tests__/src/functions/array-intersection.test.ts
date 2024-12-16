import { arrayIntersection } from "../../../functions";

describe("array intersection function", () => {
  it("should return an array with the intersection of two arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const result = arrayIntersection(array1, array2);
    expect(result).toEqual([3, 4, 5]);
  });
});
