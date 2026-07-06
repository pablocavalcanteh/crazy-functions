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

## New in v1.3.0

### Array

```typescript
cf.removeDuplicatesByProperty(
  [{ id: 1, name: "John" }, { id: 1, name: "Johnny" }, { id: 2, name: "Jane" }],
  "id"
);
// [{ id: 1, name: "John" }, { id: 2, name: "Jane" }]
```

### Object

```typescript
cf.getNestedProperty({ a: { b: { c: 42 } } }, "a.b.c", 0);
// 42

cf.setNestedProperty({}, "a.b.c", 42);
// { a: { b: { c: 42 } } }
```

### String

```typescript
cf.camelCase("hello-world-foo"); // helloWorldFoo
cf.snakeCase("helloWorldFoo");   // hello_world_foo
cf.kebabCase("hello_world_foo"); // hello-world-foo
```

### Higher-Order

```typescript
const pipeline = cf.pipe(
  (value: number) => value + 1,
  (value: number) => value * 2
);

pipeline(5); // 12
```

## API

### Array Functions

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

cf.getPropertyValues(candidates, "occupation");

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

This function returns an array with values ​​of the property passed as a parameter.

```typescript
getPropertyValues(arr: any[], propertyName: string): any
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

This function returns an object with all properties of the objects array.

```typescript
createObjectFromObjectsArray(initialObject: object = {}, arr: Array<{ [key: string]: any }>): object
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

This function returns the unios between two arrays.

```typescript
<T extends string | number>( arr1: T[], arr2: T[]): Array<T>
```

---

&nbsp;

### String Functions

```typescript
import cf from "crazy-functions";

cf.capitalizeFirstLetter("hello world!");

/** returns
  Hello world!
*/
```

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

This function capitalize all the first letter of words.

```typescript
capitalizeAllFirstLetter(words: Array<string>): Array<string>
```

---

&nbsp;

### Format Functions

```typescript
import cf from "crazy-functions";

cf.formatCurrency(1000);

/** returns
    R$1,000.00
*/
```

This function formats numbers to currencies.

```typescript
cf.formatCurrency(value: number, locale: string = "default", options: object = { style: "currency", currency: "BRL"}): string
```

---

&nbsp;

### Object Functions

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

cf.pluck(project, "technologies");

/** returns
   [
      "NodeJS",
      "ReactJS",
      "MongoDB",
    ]
*/
```

This function returns the value of the last property passed as a parameter.

```typescript
pluck(obj: object, ...keys: NonEmptyArray<string>): any;
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const obj = { a: 1, b: 2, c: 3 };

cf.pick(obj, 'a', 'c');

/** returns
   { a: 1, c: 3 }
*/
```

This function creates an object with only the specified keys.

```typescript
pick<T extends Record<string, any>, K extends keyof T>(obj: T, ...keys: K[]): Partial<T>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const obj = { a: 1, b: 2, c: 3 };

cf.omit(obj, 'b');

/** returns
   { a: 1, c: 3 }
*/
```

This function creates an object without the specified keys.

```typescript
omit<T extends Record<string, any>, K extends keyof T>(obj: T, ...keys: K[]): Partial<T>
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const obj = { a: { b: 1 } };
const source = { a: { c: 2 } };

cf.merge(obj, source);

/** returns
   { a: { b: 1, c: 2 } }
*/
```

This function deep merges objects.

```typescript
merge<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const obj = { original: true };

const cloned = cf.cloneDeep(obj);

/** cloned is a deep copy of obj */
```

This function creates a deep copy of an object or array.

```typescript
cloneDeep<T>(obj: T): T
```

---

&nbsp;

### Utility Functions

```typescript
import cf from "crazy-functions";

cf.isEmpty(null);        // true
cf.isEmpty("");          // true
cf.isEmpty([]);          // true
cf.isEmpty({});          // true
cf.isEmpty("hello");     // false
```

This function checks if a value is empty.

```typescript
isEmpty(value: any): boolean
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const arr = [1, 0, false, 2, '', null, 3, undefined];

cf.compact(arr);

/** returns
   [1, 2, 3]
*/
```

This function removes falsy values from an array.

```typescript
compact<T>(arr: (T | null | undefined | false | 0 | '')[]): T[]
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const arr = [1, 2, 2, 3, 3, 3];

cf.unique(arr);

/** returns
   [1, 2, 3]
*/
```

This function returns unique values from an array.

```typescript
unique<T extends string | number>(arr: T[]): T[]
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const arr = [1, [2, [3, 4]]];

cf.flatten(arr);

/** returns
   [1, 2, 3, 4]
*/
```

This function flattens a nested array.

```typescript
flatten<T>(arr: any[], depth: number = Infinity): T[]
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const arr = [1, 2, 3, 4, 5];

cf.chunk(arr, 2);

/** returns
   [[1, 2], [3, 4], [5]]
*/
```

This function splits an array into chunks of a specified size.

```typescript
chunk<T>(arr: T[], size: number): T[][]
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

 const arr = [1, 2, 3, 4, 5]

cf.shuffle(arr);

/** return could be
   [5, 2, 4, 1, 3]
*/
```

This function shuffles an array.

```typescript
shuffle(arr: any[], fn: (() => number) | undefined = undefined): any[]
```

---

&nbsp;

### Higher-Order Functions

```typescript
import cf from "crazy-functions";

const expensiveCalculation = (n: number) => n * n;
const memoized = cf.memoize(expensiveCalculation);

memoized(5); // calculated
memoized(5); // returned from cache
```

This function creates a memoized version of a function that caches results.

```typescript
memoize<T extends (...args: any[]) => any>(fn: T): T
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

const handleResize = () => console.log('Resized');
const debounced = cf.debounce(handleResize, 300);

// Call multiple times quickly
window.addEventListener('resize', debounced);
```

This function creates a debounced version of a function.

```typescript
debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void
```

---

&nbsp;

```typescript
import cf from "crazy-functions";

await cf.delay(1000); // Wait for 1 second
console.log('Done');
```

This function creates a promise that resolves after a specified delay.

```typescript
delay(ms: number): Promise<void>
```

---

&nbsp;

## License

[MIT](https://choosealicense.com/licenses/mit/)
