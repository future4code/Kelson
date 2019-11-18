import { ordenarArrayEmOrdemCrescente } from "./ex5";

describe("Ordena array em ordem crescente", () => { 
    test("Primeiro teste", () => {
      const teste = [1, 2, 3, 2, 4];
      const res = ordenarArrayEmOrdemCrescente(teste);
      expect(res).toStrictEqual([1,2,2,3,4])
    });

  test("Segundo teste", () => {
    const teste = [1, 2, 3, 4];
    const res = ordenarArrayEmOrdemCrescente(teste);
    expect(res).toStrictEqual([1, 2, 3, 4])
  });

  test("Terceiro teste", () => {
    const teste = [1, -22, 3, 2, 4];
    const res = ordenarArrayEmOrdemCrescente(teste);
    expect(res).toStrictEqual([-22, 1, 2, 3, 4])
  });
  test("Quarto teste", () => {
    const teste = [1, -22, 3, 1000, 4];
    const res = ordenarArrayEmOrdemCrescente(teste);
    expect(res).toStrictEqual([-22, 1, 3, 4, 1000])
  });
});

