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

## License

[MIT](https://choosealicense.com/licenses/mit/)
