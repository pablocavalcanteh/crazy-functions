import { validArgs } from "@/decorators";

const getAttributeValues = (arr: any[], propertyName: string): any[] => {
  const propValues = arr
    .map((obj) => obj[propertyName])
    .filter((value) => value !== undefined);

  return [...new Set(propValues)];
};

export default validArgs(getAttributeValues);
