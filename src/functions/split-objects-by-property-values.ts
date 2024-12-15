import { validArgs } from "@/decorators";

const splitObjectsByPropertyValues = (arr: any[], propertyName: string) => {
  const propertyValues = Array.from(
    new Set(
      arr.map((obj) => {
        obj[propertyName];
      })
    )
  );

  if (propertyValues.length == 0) {
    return arr;
  }

  return propertyValues.map((value) =>
    arr.filter((obj) => obj[propertyName] === value)
  );
};

export default validArgs(splitObjectsByPropertyValues);
