import { pluck } from '@/functions';
import { project } from "../../../mocks";

describe("pluck function", () => {
  it("should return correct value", () => {
    expect(pluck(project, "name")).toBe("Project 1");
    expect(pluck(project, "technologies")).toEqual([
      "NodeJS",
      "ReactJS",
      "MongoDB",
    ]);

    const result = pluck(project, "team");
    expect(Array.isArray(result)).toBeTruthy();
    expect(pluck(project, "extra", "budget")).toBe(100000);
  });

  it("should throw an error when the first argument is invalid", () => {
    // @ts-ignore
    expect(() => pluck(null, "name")).toThrow("First argument must be an object!");
  });

  it("should throw an error when trying to pluck from an array", () => {
    expect(() => pluck(project, "team", "name")).toThrow("Data is an array!");
  });

  it("should throw an error when a property does not exist", () => {
    expect(() => pluck(project, "missing")).toThrow(
      "Property missing does not exist in the object!"
    );
  });
});
