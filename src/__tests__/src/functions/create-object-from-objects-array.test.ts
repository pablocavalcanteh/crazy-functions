import { createObjectFromObjectsArray } from "../../../functions";
import { userInfos } from "../../mocks";

describe("createObjectFromObjectsArray function", () => {
  it("should return an object with the properties of the objects in the array", () => {
    const result = createObjectFromObjectsArray({}, userInfos);

    expect(result).toEqual({
      name: "User 1",
      email: "user@email.com",
      address: "street 1",
      phone: "123456789",
      role: "user",
      scopes: ["read", "write"],
    });
  });
});
