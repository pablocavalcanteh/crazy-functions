import { groupObjects } from "../../../functions";
import { products } from "../../mocks";

describe("group objects by property function", () => {

    it("should return an object with the keys as the values of the property and the values as an array of objects with that property", () => {

        const result = groupObjects(products, "category");

        expect(result).toEqual({
            Informatic: [
                { name: "Product 1", category: "Informatic" },
                { name: "Product 4", category: "Informatic" },
            ],
            Clothes: [
                { name: "Product 2", category: "Clothes" },
            ],
            "Home appliances": [
                { name: "Product 3", category: "Home appliances" },
            ],
        });
    });

    it("should throw an error if the property does not exist in the object", () => {

        expect(() => groupObjects(products, "price")).toThrow("Property price does not exist in object");
    });
});
