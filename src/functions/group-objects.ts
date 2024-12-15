import { IllegalArgumentException } from "@/exceptions";
import { validArgs } from "@/decorators";

/**
 * This function grouping objects of the array based on the property passed by parameter.
 *
 * @param arr Array of objects.
 * @param propertyName Name of the property used to group the objects.
 * @returns Object with array of grouped objects.
 */
const groupObjects = (arr: any[], propertyName: string): object => {
  return arr.reduce((acc, obj) => {
    const groupingKey = obj[propertyName];
    if (!groupingKey) {
      throw new IllegalArgumentException(
        `Property ${propertyName} does not exist in object`
      );
    }
    acc[groupingKey] = acc[groupingKey] || [];
    acc[groupingKey].push(obj);
    return acc;
  }, {});
};

export default validArgs(groupObjects);
