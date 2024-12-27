const products = [
  { name: "Product 1", category: "Informatic" },
  { name: "Product 2", category: "Clothes" },
  { name: "Product 3", category: "Home appliances" },
  { name: "Product 4", category: "Informatic" },
];

const candidates = [
  { name: "Candidate 1", occupation: "Backend Developer" },
  { name: "Candidate 2", occupation: "Designer UI/UX" },
  { name: "Candidate 3", occupation: "Software Tester" },
  { name: "Candidate 4", occupation: "Software Engineer" },
  { name: "Candidate 5", occupation: "Software Developer" },
  { name: "Candidate 6", occupation: "Designer UI/UX" },
  { name: "Candidate 7", occupation: "Frontend Developer" },
  { name: "Candidate 8", occupation: "Backend Developer" },
  { name: "Candidate 9" },
  { name: "Candidate 10" },
];

const userInfos = [
  {
    name: "User 1",
    email: "user@email.com",
  },
  {
    address: "street 1",
    phone: "123456789",
  },
  {
    role: "user",
  },
  {
    scopes: ["read", "write"],
  },
];

const project = {
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

  extra: {
    budget: 100000,
    expenses: 50000,
    lider: {
      name: "User 2",
      email: "",
    },
  },
};

export { products, candidates, userInfos, project };
