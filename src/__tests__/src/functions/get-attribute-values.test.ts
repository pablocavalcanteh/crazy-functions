import { getPropertyValues } from "../../../functions";
import { candidates } from "../../mocks";

describe("get attribute values function", () => {
  it("should return an array with the values of the property", () => {
    const occupations = [
      "Backend Developer",
      "Designer UI/UX",
      "Software Tester",
      "Software Engineer",
      "Software Developer",
      "Frontend Developer",
    ];

    const result = getPropertyValues(candidates, "occupation");

    expect(result).toEqual(occupations);
  });
});
