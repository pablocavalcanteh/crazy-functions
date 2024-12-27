# Crazy Functions

Library of the functions for helping you in several situations.

## Installation

Use the node package manager [npm](https://nodejs.org/en/download/package-manager) to install crazy-functions.

```bash
npm install crazy-functions
```

## Usage

```typescript
import cf from "crazy-functions";

const products = [
  { name: "Product 1", category: "Informatic" },
  { name: "Product 2", category: "Clothes" },
  { name: "Product 3", category: "Home appliances" },
  { name: "Product 4", category: "Informatic" },
];

cf.groupObjects(products, "category");

/** returns 
{
    Informatic: [{
            name: "Product 1",
            category: "Informatic"
        },
        {
            name: "Product 4",
            category: "Informatic"
        },
    ],
    Clothes: [{
        name: "Product 2",
        category: "Clothes"
    }, ],
    "Home appliances": [{
        name: "Product 3",
        category: "Home appliances"
    }, ],
}

*/
```

## API

This function grouping objects of the array based on the property passed by parameter.

```typescript
groupObjects(arr: any[], propertyName: string): object
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

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

cf.getAttributeValues(candidates, "occupation");

/** returns 
[
      "Backend Developer",
      "Designer UI/UX",
      "Software Tester",
      "Software Engineer",
      "Software Developer",
      "Frontend Developer",
]
*/
```

## API

This function returns an array with values ​​of the property passed as a parameter.

```typescript
getAttributeValues(arr: any[], propertyName: string): any
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

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

cf.splitObjectsByPropertyValues(candidates, "occupation");

/** returns
[
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
    ]
*/
```

## API

This function returns an array of arrays of objects separated by the values ​​of a property passed as a parameter.

```typescript
splitObjectsByPropertyValues(arr: any[], propertyName: string): Array<Array<any>>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

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

cf.createObjectFromObjectsArray({}, userInfos);

/** returns
{
      name: "User 1",
      email: "user@email.com",
      address: "street 1",
      phone: "123456789",
      role: "user",
      scopes: ["read", "write"],
}
*/
```

## API

This function returns an object with all properties of the objects array.

```typescript
createObjectFromObjectsArray(initialObject: object = {}, arr: Array<{ [key: string]: any }): object
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

cf.range(5, 10);

/** returns
  [5, 6, 7, 8, 9, 10]
*/
```

## API

This function returns an array with defined range.

```typescript
range(start: number, end: number): Array<number>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

cf.arrayDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

/** returns
  [1, 2]
*/
```

## API

This function returns the difference between two arrays.

```typescript
<T extends string | number>( arr1: T[], arr2: T[]): Array<T>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

cf.arrayIntersection([1, 2, 3], [3]);

/** returns
  [3]
*/
```

## API

This function returns the intersection between two arrays.

```typescript
<T extends string | number>( arr1: T[], arr2: T[]): Array<T>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

cf.arrayUnion([1, 2, 3], [4, 5, 6]);

/** returns
  [1, 2, 3, 4, 5, 6]
*/
```

## API

This function returns the unios between two arrays.

```typescript
<T extends string | number>( arr1: T[], arr2: T[]): Array<T>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

cf.capitalizeFirstLetter("hello world!");

/** returns
  Hello world!
*/
```

## API

This function capitalize the first letter of word.

```typescript
capitalizeFirstLetter(word: string): string
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

cf.capitalizeAllFirstLetter(["hello", "world!"]);

/** returns
  ["Hello", "World!"]
*/
```

## API

This function capitalize all the first letter of words.

```typescript
capitalizeAllFirstLetter(words: Array<string>): Array<string>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

cf.formatCurrency(1000);

/** returns
    R$1,000.00
*/
```

## API

This function formats numbers to currencies.

```typescript
formatCurrency(value: number, locale: string = "default", options: object = { style: "currency", currency: "BRL"}): string
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

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

cf.remove(project, "extra", "lider");

/** returns
   {
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
    }
*/
```

## API

This function removes the last property of the object passed as a parameter.

```typescript
function remove(obj: object, ...args: any[]): object;
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

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

pluck(project, "technologies");

/** returns
   [
      "NodeJS",
      "ReactJS",
      "MongoDB",
    ]
*/
```

## API

This function returns the value of the last property passed as a parameter.

```typescript
function pluck(obj: object, ...keys: NonEmptyArray<string>): any;
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
