let novaRodada;
let maoUsuario = new Array ();
let maoComputador = new Array ();
let pontosUsuario = 0;
let pontosComputador = 0;
let compra;
 
alert('Bem vindo ao jogo de Blackjack!');

do{
  novaRodada = confirm("Quer iniciar uma nova rodada?");
  if (novaRodada === true){
    alert('Nova rodada iniciada.') 
    maoUsuario = novamao(maoUsuario);
    maoComputador = novamao(maoComputador); 
    do{
      cartasUsuario = cartas(maoUsuario)
      compra = confirm('Suas cartas são' + cartasUsuario + '️. A carta revelada do computador é ' + maoComputador[0].texto + '. Deseja comprar mais uma carta?');
       if (compra === true){
            maoUsuario.push(comprarCarta());
       }
        pontosUsuario = pontos(maoUsuario);
       if (pontosUsuario > 21 ){
            compra = false;
       }
    }while (compra === true) 
    pontosComputador = pontos(maoComputador);
    while ((pontosComputador < pontosUsuario) && (pontosComputador < 21) && (pontosUsuario < 21)){
      maoComputador.push(comprarCarta());
      pontosComputador = pontos(maoComputador);
    }
    cartasUsuario = cartas(maoUsuario);
    cartasComputador = cartas(maoComputador);
    alert('Suas cartas são' + cartasUsuario + '️. pontuação '+ pontosUsuario + '.' );
    alert('As cartas do Computador são' + cartasComputador + '️. pontuação '+ pontosComputador + '.' );
    if ((pontosUsuario < pontosComputador) || (pontosUsuario > 21)){
      alert('Computador venceu!');
    }
    else if ((pontosUsuario > pontosComputador) || (pontosComputador > 21)){
      alert('Usuario Venceu!');
    }
    elsif (pontosUsuario === pontosComputador){
      alert('Empate!');
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

function cartas(mao){
  let cartas = ' ';
  for(carta of mao){
    cartas =  cartas + carta.texto;
  }
  return cartas
}

function novamao(mao){
  let ponto
  mao.push(comprarCarta())
  while (mao.length < 2){
      mao.push(comprarCarta());
      if(mao.length = 2){
      ponto = pontos(mao);
      }
      if (ponto === 22){
        mao.splice(0,2);
        ponto = 0
      }
  }
  return mao

}

function pontos(test){
  let soma = 0;
  for (let i = 0; i < test.length; i++){
    soma += test[i].valor;
  }
  return soma
}

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