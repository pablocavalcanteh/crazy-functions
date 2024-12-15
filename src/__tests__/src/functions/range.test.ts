import { range } from "../../../functions";

describe("range function", () => {
  it("should return an array with the range of numbers", () => {
    const result = range(5, 10);

    expect(result).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it("should throw an IllegalArgumentException exception with message 'Start is null or undefined!'", () => {
    // @ts-ignore
    expect(() => range(null, 5)).toThrow("Start is null or undefined!");
  });

  it("should throw an IllegalArgumentException exception with message 'End is null or undefined!'", () => {
    // @ts-ignore
    expect(() => range(1, null)).toThrow("End is null or undefined!");
  });
});
