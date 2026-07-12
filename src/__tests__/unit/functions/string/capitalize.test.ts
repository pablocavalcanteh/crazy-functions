import { capitalize } from '@/functions';

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello world!")).toBe("Hello world!");
  });

  it("should throw an error if the argument is not a string", () => {
    // @ts-ignore
    expect(() => capitalize(123)).toThrow(
      "Argument is not a string or is an empty string"
    );
  });

    it("should throw an error if the argument is an empty string", () => {
        expect(() => capitalize("")).toThrow(
        "Argument is not a string or is an empty string"
        );
    });
});
