import { pluck } from "../../../functions";
import { project } from "../../mocks";

describe("pluck function", () => {
  it("should return correct value", () => {
    expect(pluck(project, "name")).toBe("Project 1");
    expect(pluck(project, "technologies")).toEqual([
      "NodeJS",
      "ReactJS",
      "MongoDB",
    ]);

    let result = pluck(project, "team")
    expect(Array.isArray(result)).toBeTruthy()})

    expect(pluck(project, "extra", "budget")).toBe(100000);
});
