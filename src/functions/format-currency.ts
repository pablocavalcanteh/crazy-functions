import { IllegalArgumentException } from "@/exceptions";

/**
 * This function formats numbers to currencies.
 *
 * @param value Number to be formatted.
 * @param locale Locale to be used.
 * @param options Options to be used.
 * @returns Formatted currency.
 */

const formatCurrency = (
  value: number,
  locale: string = "default",
  options: object = {
    style: "currency",
    currency: "BRL",
  }
): string => {
  if (typeof value !== "number") {
    throw new IllegalArgumentException("Argument is not a number");
  }
  const formatter = new Intl.NumberFormat(locale, options);

  return formatter.format(value);
};

export default formatCurrency;
