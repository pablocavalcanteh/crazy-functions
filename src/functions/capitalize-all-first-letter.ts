const capitalizeAllFirstLetter = (str: Array<string>): Array<string> => {
  if (!Array.isArray(str)) {
    throw new Error("Argument is not an array");
  }

  return str.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
};

export default capitalizeAllFirstLetter;