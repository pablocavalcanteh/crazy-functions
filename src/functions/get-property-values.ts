import { validArgs } from "@/decorators";

/**
 * This function returns an array with values ​​of the property passed by parameter.
 *
 * @param arr Array of objects.
 * @param propertyName Name of the property used to split the objects.
 * @returns Array of the property values passed by parameter.
 */
const getPropertyValues = (arr: any[], propertyName: string): any[] => {
  const propValues = arr
    .map((obj) => obj[propertyName])
    .filter((value) => value !== undefined);

  return [...new Set(propValues)];
};

export default validArgs(getPropertyValues);
