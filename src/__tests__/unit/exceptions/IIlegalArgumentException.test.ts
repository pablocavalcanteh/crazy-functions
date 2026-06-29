import { IllegalArgumentException } from "../../../exceptions";

describe("IllegalArgumentException", () => {
  it("should throw an error with the message 'Property price does not exist in object'", () => {
    expect(() => {
      throw new IllegalArgumentException(
        "Property price does not exist in object"
      );
    }).toThrow("Property price does not exist in object");
  });

  it("should be an instance of Error", () => {
    const exception = new IllegalArgumentException(
      "Property price does not exist in object"
    );
    expect(exception).toBeInstanceOf(Error);
  });
});
