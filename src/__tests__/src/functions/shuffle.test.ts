import { shuffle } from "../../../functions";

describe("shuffle function", () => {

    it("should shuffle an array", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = shuffle(arr);
        expect(result).not.toEqual(arr);
        expect(result).toHaveLength(arr.length);
    });
    
    it("should shuffle an array with a custom sort function", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = shuffle(arr, () => 0.5 - Math.random());
        expect(result).not.toEqual(arr);
        expect(result).toHaveLength(arr.length);
    });
    
    it("should throw an exception when the first parameter is not an array", () => {
        // @ts-ignore
        expect(() => shuffle("string")).toThrow("The first parameter should be an array");
    });
});