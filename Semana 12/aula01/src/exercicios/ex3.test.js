import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  test("Primeiro teste", () => {
    Math.random = jest.fn(() => {
      return 0.5
    })
    const res = sorteiaNumero(1, 100);
    expect(res).toBe(parseInt((1+100)/2))
  });

  test("Segundo teste", () => {
    Math.random = jest.fn(() => {
      return 0.5
    })
    const res = sorteiaNumero(-100, 100);
    expect(res).toBe(parseInt((-100 + 100)*0.5))
  });

  test("Terceiro teste", () => {
    Math.random = jest.fn(() => {
      return 0.2
    })
    const res = sorteiaNumero(0, 100);
    expect(res).toBe(parseInt((0 + 100) / 5))
  });

  test("Quarto teste", () => {
    Math.random = jest.fn(() => {
      return 0.25
    })
    const res = sorteiaNumero(1, 100);
    expect(res).toBe(parseInt((1 + 100)*0.25))
  });
});
