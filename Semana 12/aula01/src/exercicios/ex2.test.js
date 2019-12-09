import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  test("Primeiro teste", () => {
    const phrase = 'test'
    const res = checaPalindromo(phrase);
    expect(res).toBe(false)
  });
  test("Segundo teste", () => {
    const phrase = 'mirim'
    const res = checaPalindromo(phrase);
    expect(res).toBe(true)
  });
});
