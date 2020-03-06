import { checkOneEdit } from "../src/exercicio2";

describe("Testing checkAnagram", () => {
    it("Should be true if s1='asd' s2='asf'", () => {
        const result = checkOneEdit("asd", "asf")
        expect(result).toEqual(true)
    }),
    it("Should be true if s1='asd' s2='asdf'", () => {
        const result = checkOneEdit("sasd", "sasdf")
        expect(result).toEqual(true)
    })
    it("Should be true if s1='asd' s2='as'", () => {
        const result = checkOneEdit("gasd", "gas")
        expect(result).toEqual(true)
    }),
    it("Should be false if s1='asd' s2='aef'", () => {
        const result = checkOneEdit("asd", "aef")
        expect(result).toEqual(false)
    }),
    it("Should be false if s1='asd' s2='asdef'", () => {
        const result = checkOneEdit("asd", "asdef")
        expect(result).toEqual(false)
    })
});
