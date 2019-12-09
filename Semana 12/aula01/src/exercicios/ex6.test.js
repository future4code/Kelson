import { primeirasLetrasParaMaiusculas } from "./ex6";

describe("Ordena array em ordem crescente", () => {
  test("Primeiro teste", () => {
      const teste = "Oi! Sou uma string bem legal para testes!";
      const res = primeirasLetrasParaMaiusculas(teste);
    expect(res).toBe("Oi! Sou Uma String Bem Legal Para Testes!")
  });
  test("Segundo teste", () => {
    const teste = "Some other answers modify String.prototype (this answer used to as well)";
    const res = primeirasLetrasParaMaiusculas(teste);
    expect(res).toBe("Some Other Answers Modify String.prototype (This Answer Used To As Well)")
  });
});
