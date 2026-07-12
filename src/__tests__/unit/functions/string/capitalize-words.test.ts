import { capitalizeWords } from '@/functions';

describe("capitalizeWords", () => {
  it("should capitalize the first letter of each string in an array", () => {
    const result = capitalizeWords(["hello", "world!"]);

    expect(result).toEqual(["Hello", "World!"]);
  });

  it("should throw an error if the argument is not an array", () => {
    // @ts-ignore
    expect(() => capitalizeWords("hello")).toThrow(
      "Argument is not an array"
    );
  });
});
