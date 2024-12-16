import { arrayUnion } from "../../../functions";

describe("array union function", () => {
  it("should return an array with the union of two arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const result = arrayUnion(array1, array2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
