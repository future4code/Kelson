import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  test("Primeiro teste", () => {
    const year = 1996
    const res = anoBissexto(year);
    expect(res).toBe(true)
  });
  test("Segundo teste", () => {
    const year = 100
    const res = anoBissexto(year);
    expect(res).toBe(false)
  });
  test("Terceiro teste", () => {
    const year = 400
    const res = anoBissexto(year);
    expect(res).toBe(true)
  });
  test("Quarto teste", () => {
    const year = 2547
    const res = anoBissexto(year);
    expect(res).toBe(false)
  });
  test("Terceiro teste", () => {
    const year = 2000
    const res = anoBissexto(year);
    expect(res).toBe(true)
  });
  test("Terceiro teste", () => {
    const year = '2000'
    const res = anoBissexto(year);
    expect(res).toBe(true)
  });


});
