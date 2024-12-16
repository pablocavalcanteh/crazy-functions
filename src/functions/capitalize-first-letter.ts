const capitalizeFirstLetter = (str: string): string => {
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Argument is not a string or is an empty string");
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalizeFirstLetter;
