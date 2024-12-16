const formatCurrency = (
  value: number,
  locale: string = "default",
  options: object = {
    style: "currency",
    currency: "BRL",
  }
): string => {
  if (typeof value !== "number") {
    throw new Error("Argument is not a number");
  }
  const formatter = new Intl.NumberFormat(locale, options);

  return formatter.format(value);
};

export default formatCurrency;
