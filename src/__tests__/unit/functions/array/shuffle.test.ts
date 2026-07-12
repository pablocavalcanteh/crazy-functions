import { shuffle } from '@/functions';

describe("shuffle function", () => {

    it("should shuffle an array and return all elements", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = shuffle(arr);
        
        // Verify length is preserved
        expect(result).toHaveLength(arr.length);
        
        // Verify all original elements are present (sorted comparison)
        expect(result.sort((a, b) => a - b)).toEqual(arr.sort((a, b) => a - b));
    });
    
    it("should return different order than original in most cases", () => {
        const arr = [1, 2, 3, 4, 5];
        
        // Run multiple times to verify shuffle effectiveness
        // With Fisher-Yates, at least one of 5 shuffles should be different
        let shuffledDifferent = false;
        
        for (let i = 0; i < 5; i++) {
            const result = shuffle([...arr]);
            if (result.toString() !== arr.toString()) {
                shuffledDifferent = true;
                break;
            }
        }
        
        expect(shuffledDifferent).toBe(true);
    });
    
    it("should shuffle array with custom comparator (for backwards compatibility)", () => {
        const arr = [1, 2, 3, 4, 5];
        // Even with custom fn, Fisher-Yates is used
        const result = shuffle(arr, () => 0.5 - Math.random());
        
        expect(result).toHaveLength(arr.length);
        expect(result.sort((a, b) => a - b)).toEqual(arr.sort((a, b) => a - b));
    });
    
    it("should not modify the original array", () => {
        const arr = [1, 2, 3, 4, 5];
        const arrCopy = [...arr];
        
        shuffle(arr);
        
        expect(arr).toEqual(arrCopy);
    });
    
    it("should throw an exception when the first parameter is not an array", () => {
        // @ts-ignore
        expect(() => shuffle("string")).toThrow("The first parameter should be an array");
        
        // @ts-ignore
        expect(() => shuffle(123)).toThrow("The first parameter should be an array");
        
        // @ts-ignore
        expect(() => shuffle({})).toThrow("The first parameter should be an array");
    });
    
    it("should handle empty arrays", () => {
        const result = shuffle([]);
        expect(result).toEqual([]);
    });
    
    it("should handle single element arrays", () => {
        const result = shuffle([1]);
        expect(result).toEqual([1]);
    });
});