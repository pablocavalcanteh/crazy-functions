import { formatCurrency } from "../../../functions";

describe("formatCurrency function", () => {
  it("should format a number as currency", () => {
    const result = formatCurrency(1000);
    expect(result).toEqual("R$1,000.00");
  });

  it("should format a number as currency with a custom locale", () => {
    const result = formatCurrency(1000, "en-US", {
      style: "currency",
      currency: "USD",
    });
    expect(result).toEqual("$1,000.00");
  });

  it("should throw an error if the argument is not a number", () => {
    // @ts-ignore
    expect(() => formatCurrency("1000")).toThrow("Argument is not a number");
  });
});
