import { splitObjectsByPropertyValues } from "../../../functions";
import { candidates } from "../../mocks";

describe("split objects by property values function", () => {
  it("should return an array of arrays with the objects that have the same property value", () => {
    const result = [
      [
        {
          name: "Candidate 1",
          occupation: "Backend Developer",
        },
        {
          name: "Candidate 8",
          occupation: "Backend Developer",
        },
      ],
      [
        {
          name: "Candidate 2",
          occupation: "Designer UI/UX",
        },
        {
          name: "Candidate 6",
          occupation: "Designer UI/UX",
        },
      ],
      [
        {
          name: "Candidate 3",
          occupation: "Software Tester",
        },
      ],
      [
        {
          name: "Candidate 4",
          occupation: "Software Engineer",
        },
      ],
      [
        {
          name: "Candidate 5",
          occupation: "Software Developer",
        },
      ],
      [
        {
          name: "Candidate 7",
          occupation: "Frontend Developer",
        },
      ],
      [
        {
          name: "Candidate 9",
        },
        {
          name: "Candidate 10",
        },
      ],
    ];

    const resultFunction = splitObjectsByPropertyValues(candidates, "occupation");
    expect(resultFunction).toEqual(result);
  });
});
