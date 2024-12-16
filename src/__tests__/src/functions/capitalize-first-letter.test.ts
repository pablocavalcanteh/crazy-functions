import { capitalizeFirstLetter } from "../../../functions";

describe("capitalizeFirstLetter function", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello world!")).toBe("Hello world!");
  });

  it("should throw an error if the argument is not a string", () => {
    // @ts-ignore
    expect(() => capitalizeFirstLetter(123)).toThrow(
      "Argument is not a string or is an empty string"
    );
  });

    it("should throw an error if the argument is an empty string", () => {
        expect(() => capitalizeFirstLetter("")).toThrow(
        "Argument is not a string or is an empty string"
        );
    });
});
