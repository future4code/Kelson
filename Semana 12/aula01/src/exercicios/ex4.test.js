import { removeItensDuplicados } from "./ex4";

describe("Remove itens duplicados", () => {
  test("Primeiro teste", () => {
    const teste = [1, 2, 3, 2, 4];
    const res = removeItensDuplicados(teste);
    expect(res).toStrictEqual([1,2,3,4]) // porque não funciona com .toBe?
  });
  test("Segundo teste", () => {
    const teste = [3 ,1, 2, 3, 2, 4];
    const res = removeItensDuplicados(teste);
    expect(res).toStrictEqual([3, 1, 2, 4]) // porque não funciona com .toBe?
  });
  test("Terceiro teste", () => {
    const teste = [1, 2, 3, 4];
    const res = removeItensDuplicados(teste);
    expect(res).toStrictEqual([1, 2, 3, 4]) // porque não funciona com .toBe?
  });
});

