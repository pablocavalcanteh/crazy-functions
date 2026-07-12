import { flattenToObject } from '@/functions';
import { userInfos } from "../../../mocks";

describe("flattenToObject", () => {
  it("should return an object with the properties of the objects in the array", () => {
    const result = flattenToObject({}, userInfos);

    expect(result).toEqual({
      name: "User 1",
      email: "user@email.com",
      address: "street 1",
      phone: "123456789",
      role: "user",
      scopes: ["read", "write"],
    });
  });

  it("should throw an error when initialObject is invalid", () => {
    // @ts-ignore
    expect(() => flattenToObject(null, userInfos)).toThrow(
      "Invalid argument: initialObject"
    );
  });

  it("should use the default initial object when it is not provided", () => {
    expect(flattenToObject(undefined, [{ name: "User" }])).toEqual({
      name: "User",
    });
  });

  it("should return the initial object when the array is empty", () => {
    const initialObject = { name: "Initial" };

    expect(flattenToObject(initialObject, [])).toEqual(initialObject);
  });

  it("should ignore null items and inherited properties", () => {
    const item = Object.create({ inherited: "value" });
    item.name = "User";

    const result = flattenToObject({}, [null as any, item]);

    expect(result).toEqual({ name: "User" });
  });
});
