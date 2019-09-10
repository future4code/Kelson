let novaRodada;
let maoUsuario = new Array ();
let maoComputador = new Array ();
let pontosUsuario = 0;
let pontosComputador = 0;

alert('Bem vindo ao jogo de Blackjack!');

do{
  novaRodada = confirm("Quer iniciar uma nova rodada?");
  if (novaRodada === true){
    for(let i = 0; i < 2; i++){
      maoUsuario.push(comprarCarta());
      pontosUsuario += maoUsuario[i].valor;
      maoComputador.push(comprarCarta());
      pontosComputador += maoComputador[i].valor;
    }
    console.log('Usuário - cartas: ' + maoUsuario[0].texto + '️ ' + maoUsuario[1].texto + ' - pontuação ' + pontosUsuario + '.');
    console.log('Computador - cartas: ' + maoComputador[0].texto + '️ ' + maoComputador[1].texto + ' - pontuação ' + pontosComputador + '.'); 
    
    if (pontosUsuario < pontosComputador){
      console.log('Computador venceu!');
    }
    if (pontosUsuario > pontosComputador){
      console.log('Usuario Venceu!');
    }
    if (pontosUsuario === pontosComputador){
      console.log('Empate!');
    }
    maoUsuario.splice(0,2);
    maoComputador.splice(0,2);
    pontosUsuario = 0;
    pontosComputador = 0;
  }
  else{
    console.log('O jogo acabou.');
  }
}while (novaRodada === true)


function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta
}