import { capitalizeAllFirstLetter } from "../../../functions";

describe("capitalizeAllFirstLetter function", () => {
  it("should capitalize the first letter of each string in an array", () => {
    const result = capitalizeAllFirstLetter(["hello", "world!"]);

    expect(result).toEqual(["Hello", "World!"]);
  });

  it("should throw an error if the argument is not an array", () => {
    // @ts-ignore
    expect(() => capitalizeAllFirstLetter("hello")).toThrow(
      "Argument is not an array"
    );
  });
});
