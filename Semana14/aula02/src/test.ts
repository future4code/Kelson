// EX01

const exe01 = (arr: number[]) : {numeros:number, impares:number, soma: number} =>{
    let sum: number = 0
    let count: number = 0
    arr.forEach( (n: number) => {count++
                       sum += n})
    let countImp: number = 0
    arr.filter( (n: number) => n % 2 !== 0).forEach(n => countImp++)
    return { numeros: count,
             impares: countImp,
             soma: sum}
}  

// console.log(exe01([1,2,3,4,5,6,7,8]))

// EX02

type post = {
    autor: string
    texto: string
}

const post1: post = {
    autor: "João",
    texto: "oi"
}

const post2: post = {
    autor: "João",
    texto: "tchau"
}

const post3: post = {
    autor: "João",
    texto: "obrigado"
}

const post4: post = {
    autor: "Francisco",
    texto: "comida"
}

const post5: post = {
    autor: "Jusevaldo",
    texto: "Vitoria"
}

const exe02 = (arr: post[], autor: string) : post[] => {
    return arr.filter( (el: post) => el.autor === autor)
}


// console.log(exe02([post1,post2,post3,post4,post5], "João"))

// EX03

const exe03 = (ano: number, periodo: string = "DC") : string => {
    if (periodo === "AC"){
        if ( ano> 4000)
            return "Pré-história"
        return "Idade Antiga"
    }
    if (ano < 476)
        return "Idade Antiga"
    else if (ano < 1453)
        return "Idade Media"
    else if (ano < 1789)
        return "Idade Moderna"
    return "Idade Contemporânia"
}

// console.log(exe03(400000, "AC"))

// EX04
enum classific {
    verão = 0.95,
    inverno = 0.90,
    banho = 0.96,
    intimas = 0.93
}

type produto = {
    nome: string
    preço: number
    classificação: classific
    preçoDesconto ?: number
}

const produto1: produto = {
    nome: "Celular",
    preço: 30,
    classificação: classific.verão,
}

const produto2: produto = {
    nome: "CelularBranco",
    preço: 30,
    classificação: classific.inverno,
}

const exe04 = (arr : produto[]): produto[] => {
    return arr.map(el => {
                    el.preçoDesconto = el.preço * el.classificação 
                    return el} )
}

// console.log(exe04([produto1, produto2]))

// EX05

type produtoR = {
    nome: string
    custo: number
    valor: number
    vendidos?: number
}

let produtos: produtoR[] = [
]

let vendidos: produtoR[] = [
] 

const addProduto = (): void => {
    const nome: string = prompt("Nome?")
    const custo: number = Number(prompt("Custo?"))
    const valor: number = Number(prompt("Valor?"))
    const novoProduto: produtoR = {
        nome,
        custo,
        valor
    }
    produtos =  [...produtos, novoProduto]
    
}

const verPreço = (nome: string) : number => {
    return produtos.filter((el) => el.nome === nome)[0].valor
}

const vender = (nome: string, quantidade:number) : void =>{
    const vendido: produtoR = produtos.filter((el) => el.nome === nome)[0]
    vendido.vendidos = quantidade
    vendidos = [...vendidos, vendido]
}

const calcularLucro = (): number =>{
    let lucro = 0
    vendidos.forEach((el) => lucro += (el.valor - el.custo)*el.vendidos)
    return lucro
}

// EX06

const DNAparaRNA = (DNA: string): string => {
    let RNA: string = ""
    for(let base of DNA){
        switch (base) {
            case "A":
                RNA += "U"
                break;
            case "T":
                RNA += "A"
                break;
            case "G":
                RNA += "C"
                break;
            case "C":
                RNA += "G"
                break;
        }
    }
    return RNA
}
// console.log(DNAparaRNA("ATTGCTGCGCATTAACGACGCGTA"))

// EX07

const reverse = (palavra: string): string => {
    let reverse: string = ""
    for(let i = palavra.length - 1; i >= 0; i--){
        reverse += palavra[i]
    }
    return reverse
}

// console.log(reverse("reserva"))

// EX08

const fatorial = (n: number): number => {
    let fatorialN: number = 1
    if (n > 0){
        for (let i = n; i > 0; i--)
            fatorialN *=  i
        }
    return fatorialN
} 

// console.log(fatorial(5))

// Ex09

const numeroAnagramas = (palavra: string): number => {
    let aparições:number = 1
    for (let i = 0; i < palavra.length-1; i++){
        aparições = 1
        for(let y = i+1; y <palavra.length; y++){
            if (palavra[i]===palavra[y])
                aparições++
        }
        if (aparições !== 1)
            i = palavra.length
    }
    const anagramas: number = fatorial(palavra.length)/fatorial(aparições)
    return anagramas
}

// console.log(numeroAnagramas("anagrama"))