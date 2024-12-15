import { IllegalArgumentException } from "@/exceptions";
import { validArgs } from "@/decorators";

const groupObjects = (arr: any[], propertyName: string): any => {
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
