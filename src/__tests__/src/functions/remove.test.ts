import { remove } from "../../../functions";
import { project } from "../../mocks";

describe("remove function", () => {
  it("should remove the keys from the object", () => {
    const result = remove(project, "extra", "lider");
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
});
