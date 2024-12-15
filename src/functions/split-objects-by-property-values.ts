import { validArgs } from "@/decorators";

/**
 * This function returns an array of arrays of objects separated by the values ​​of a property passed as a parameter.
 *
 * @param arr Array of objects.
 * @param propertyName Name of the property used to split the objects.
 * @returns Object with array of splited objects.
 */
const splitObjectsByPropertyValues = (
  arr: any[],
  propertyName: string
): Array<Array<any>> => {
  const propertyValues = Array.from(
    new Set(
      arr.map((obj) => {
        return obj[propertyName];
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
