import { removeProperties } from '@/functions';
import { project } from "../../../mocks";

describe("removeProperties", () => {
  it("should remove the keys from the object", () => {
    const result = removeProperties(project, "extra", "lider");
    expect(result).toEqual({
      name: "Project 1",
      description: "Description Project 1",
      technologies: ["NodeJS", "ReactJS", "MongoDB"],
      status: "In progress",
      startDate: new Date("2021-01-01"),
      endDate: new Date("2021-12-31"),
      team: [
        {
          name: "User 1",
          email: "user1@email.com",
          address: {
            street: "street 1",
            city: "city 1",
            country: "country 1",
          },
        },
      ],
      extra: { budget: 100000, expenses: 50000 },
    });
  });

  it("should remove keys provided as an array", () => {
    const result = removeProperties({ name: "Project", status: "active" }, ["status"]);

    expect(result).toEqual({ name: "Project" });
  });

  it("should throw an error when the first argument is invalid", () => {
    // @ts-ignore
    expect(() => removeProperties(null, "name")).toThrow("First argument must be an object!");
  });

  it("should throw an error when no keys are provided", () => {
    // @ts-ignore
    expect(() => removeProperties({ name: "Project" })).toThrow(
      "At least one key must be provided!"
    );
  });

  it("should return the original object when the keys argument is unsupported", () => {
    const obj = { name: "Project" };

    // @ts-ignore
    expect(removeProperties(obj, 123)).toEqual(obj);
  });
});
