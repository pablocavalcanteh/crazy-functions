import validArgs from "../../../decorators/valid-args.decorator";

describe("validArgs", () => {
  it("should throw an IllegalArgumentException expection with message 'Array is null or undefined!'", () => {
    const func = (arr: any[], propertyName: string): void => {};

    const decoratedFunc = validArgs(func);

    expect(() => decoratedFunc(undefined, "property")).toThrow(
      "Array is null or undefined!"
    );
  });

  it("should throw an IllegalArgumentException expection with message 'Array is empty!'", () => {
    const func = (arr: any[], propertyName: string): void => {};

    const decoratedFunc = validArgs(func);

    expect(() => decoratedFunc([], "property")).toThrow("Array is empty!");
  });

  it("should throw an IllegalArgumentException expection with message 'Property name is null or undefined!'", () => {
    const func = (arr: any[], propertyName: string): void => {};

    const decoratedFunc = validArgs(func);

    expect(() =>
      decoratedFunc(
        [
          {
            property: "value",
          },
        ],
        ""
      )
    ).toThrow("Property name is null or undefined!");
  });
});
