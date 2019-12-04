const exe01 = (arr) => {
    let sum = 0;
    let count = 0;
    arr.forEach((n) => {
        count++;
        sum += n;
    });
    let countImp = 0;
    arr.filter((n) => n % 2 !== 0).forEach(n => countImp++);
    return { numeros: count,
        impares: countImp,
        soma: sum };
};
const post1 = {
    autor: "João",
    texto: "oi"
};
const post2 = {
    autor: "João",
    texto: "tchau"
};
const post3 = {
    autor: "João",
    texto: "obrigado"
};
const post4 = {
    autor: "Francisco",
    texto: "comida"
};
const post5 = {
    autor: "Jusevaldo",
    texto: "Vitoria"
};
const exe02 = (arr, autor) => {
    return arr.filter((el) => el.autor === autor);
};
const exe03 = (ano, periodo = "DC") => {
    if (periodo === "AC") {
        if (ano > 4000)
            return "Pré-história";
        return "Idade Antiga";
    }
    if (ano < 476)
        return "Idade Antiga";
    else if (ano < 1453)
        return "Idade Media";
    else if (ano < 1789)
        return "Idade Moderna";
    return "Idade Contemporânia";
};
console.log(exe03(400000, "AC"));
var classific;
(function (classific) {
    classific[classific["ver\u00E3o"] = 0.95] = "ver\u00E3o";
    classific[classific["inverno"] = 0.9] = "inverno";
    classific[classific["banho"] = 0.96] = "banho";
    classific[classific["intimas"] = 0.93] = "intimas";
})(classific || (classific = {}));
const produto1 = {
    nome: "Celular",
    preço: 30,
    classificação: classific.verão,
};
const produto2 = {
    nome: "CelularBranco",
    preço: 30,
    classificação: classific.inverno,
};
const exe04 = (arr) => {
    return arr.map(el => {
        el.preçoDesconto = el.preço * el.classificação;
        return el;
    });
};
let produtos = [];
let vendidos = [];
const addProduto = () => {
    const nome = prompt("Nome?");
    const custo = Number(prompt("Custo?"));
    const valor = Number(prompt("Valor?"));
    const novoProduto = {
        nome,
        custo,
        valor
    };
    produtos = [...produtos, novoProduto];
};
const verPreço = (nome) => {
    return produtos.filter((el) => el.nome === nome)[0].valor;
};
const vender = (nome, quantidade) => {
    const vendido = produtos.filter((el) => el.nome === nome)[0];
    vendido.vendidos = quantidade;
    vendidos = [...vendidos, vendido];
};
const calcularLucro = () => {
    let lucro = 0;
    vendidos.forEach((el) => lucro += (el.valor - el.custo) * el.vendidos);
    return lucro;
};
const DNAparaRNA = (DNA) => {
    let RNA = "";
    for (let base of DNA) {
        switch (base) {
            case "A":
                RNA += "U";
                break;
            case "T":
                RNA += "A";
                break;
            case "G":
                RNA += "C";
                break;
            case "C":
                RNA += "G";
                break;
        }
    }
    return RNA;
};
const reverse = (palavra) => {
    let reverse = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        reverse += palavra[i];
    }
    return reverse;
};
const fatorial = (n) => {
    let fatorialN = 1;
    if (n > 0) {
        for (let i = n; i > 0; i--)
            fatorialN *= i;
    }
    return fatorialN;
};
const numeroAnagramas = (palavra) => {
    let aparições = 1;
    for (let i = 0; i < palavra.length - 1; i++) {
        aparições = 1;
        for (let y = i + 1; y < palavra.length; y++) {
            if (palavra[i] === palavra[y])
                aparições++;
        }
        if (aparições !== 1)
            i = palavra.length;
    }
    const anagramas = fatorial(palavra.length) / fatorial(aparições);
    return anagramas;
};
//# sourceMappingURL=test.js.map