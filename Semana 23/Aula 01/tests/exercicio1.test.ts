import { checkFirstRecurringLetter } from "../src/exercicio1";

describe("Testing checkFirstRecurringLetter", () => {
    it("should be 'a' if the input is 'avjfaasdjf'", () => {
        const result = checkFirstRecurringLetter("avjfaasdjf")
        expect(result).toEqual("a")
    }),
    it("should be 'k' if the input is 'asfkqwetk zxcz'", () => {
        const result = checkFirstRecurringLetter("asfkqwetk zxcz")
        expect(result).toEqual("k")
    }),
    it("should be null if the input is 'asdfgh'", () => {
        const result = checkFirstRecurringLetter("asdfgh")
        expect(result).toEqual(null)
    })
});
