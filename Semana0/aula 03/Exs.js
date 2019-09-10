//exec1_a()
//exec1_b()
//exec2_a()
//exec2_b()
//exec3()

function exec1_a(){ 
const numb1 = prompt('Digite um numero:');
const numb2 = prompt('Digite outro numero:');

if (numb1 === numb2){
  console.log('Você digitou numeros iguais.');
}
else{
  if (numb1 > numb2){
    console.log(numb1);
    console.log(numb2);
  }
  else{
    console.log(numb2);
    console.log(numb1);
  };
};
}

function exec1_b() {
const numb1 = Number(prompt('Digite um numero:'));
const numb2 = Number(prompt('Digite outro numero:'));
const numb3 = Number(prompt('Digite outro numero:'));

if (numb1 === numb2 || numb1 === numb3 || numb2 === numb3){
  console.log('Você digitou numeros iguais.');
}
else{
  if (numb1 > numb2){
    if (numb1 > numb3){
      console.log(numb1);
      if (numb2 > numb3){
        console.log(numb2);
        console.log(numb3);
      }
      else { 
        console.log(numb3);
        console.log(numb2);
      }
    }
    else {
      console.log(numb3);
      console.log(numb1);
      console.log(numb2);
    }
  }
  else{
    if (numb1 > numb3){
        console.log(numb2);
        console.log(numb1);
        console.log(numb3);
    }
    else if (numb2 > numb3){
        console.log(numb2);
        console.log(numb3);
        console.log(numb1)
    }
    else {
          console.log(numb3);
          console.log(numb2);
          console.log(numb1);
    }
  };
};
}

function exec2_a(){

let resposta = confirm('è um animal?');

if (resposta === true){
  resposta = confirm('Tem pelo?');
  if (resposta === true){
    resposta = confirm('Late?');
    if (resposta === true){
      console.log('É um cachorro.');
    }
    else{
      console.log('É um gato.');
    }
  }
  else{
    resposta = confirm('Voa?');
    if (resposta === true){
      console.log('É um passáro.');
    }
    else{
      console.log('É um peixe.');
    }
  }
}
else{
  console.log('É uma pedra.');
}
}

function exec2_b(){
let resposta = confirm('É um ser vivo?');

if(resposta === true){
  resposta = confirm('É um animal?');
  if (resposta === true){
    resposta = confirm('Tem pelo?');
    if (resposta === true){
      resposta = confirm('Late?');
      if (resposta === true){
        console.log('É um cachorro.');
      }
      else{
        resposta = confirm('Mia?');
          if (resposta === true){
          console.log('É um gato.');
        }
        else{
        console.log('É um rato.');
        }
      }
    }
    else{
      resposta = confirm('Voa?');
      if (resposta === true){
        console.log('É um passáro.');
      }
      else{
        resposta = confirm('Respita fora d´agua?');
        if (resposta === true){
          console.log('É um sapo.');
        }
        else{
        console.log('É um peixe.');
        }
      }
    }
  }
  else{
  console.log('É uma planta.');
  }
}
else{
  console.log('É uma pedra.');
}
}

function exec3(){

const nome = prompt('Seu nome completo?');
const tipo = prompt('Qual é tipo de jogo? (In = internacional ou Na = nacional)');
const etapa = prompt('Qual etapa do jogo? (SF = Semifinais ou DT = Decisão do terceiro lugar ou FI = Final)');
const categoria = Number(prompt('Qual é a categoria? ( 1, 2, 3 ou 4)'));
const quant = Number(prompt('Qual é quantidade de ingressos?'));

let valorImg = 0;

if (tipo === 'In'){
  switch (etapa){
    case 'SF':
      switch (categoria){
        case 1:
          valorImg = 660;
          break;
        case 2:
          valorImg = 440;
          break;
        case 3:
        valorImg = 275;
          break;
      };
      break;
    case 'DT':
      switch (categoria){
        case 1:
         valorImg = 330;
          break;
        case 2:
          valorImg = 220;
          break;
        case 3:
         valorImg = 165;
          break;
      };
      break;
    case 'FI':
      switch (categoria){
        case 1:
         valorImg = 990;
          break;
        case 2:
          valorImg = 660;
          break;
        case 3:
          valorImg = 440;
          break;
      };
      break;
  };
}
else{
  switch (etapa){
  case 'SF':
    switch (categoria){
      case 1:
        valorImg = 1320;
        break;
      case 2:
        valorImg = 880;
        break;
      case 3:
        valorImg = 550;
        break;
      case 4:
        valorImg = 220;
        break;
    };
    break;
  case 'DT':
    switch (categoria){
      case 1:
        valorImg = 660;
        break;
      case 2:
        valorImg = 440;
        break;
      case 3:
        valorImg = 330;
        break;
      case 4:
        valorImg = 170;
        break;
    };
    break;
  case 'FI':
    switch (categoria){
      case 1:
        valorImg = 1980;
        break;
      case 2:
        valorImg = 1320;
        break;
      case 3:
        valorImg = 880;
        break;
      case 4:
        valorImg = 330;
        break;
    };
    break;
  }

}

if (tipo === 'In'){
  console.log('---Dados da Compra---');
  console.log('Nome do Cliente: ' + nome );
  console.log('Tipo do Jogo: ' + tipo);
  console.log('Etapa do Jogo: ' + etapa);
  console.log('Categoria: ' + categoria);
  console.log('Quantidade de imgressos: ' + quant + ' ingressos');
  console.log('---Valores---');
  console.log('Valor do imgresso em US$: US$ ' + valorImg );
  console.log('Valor do imgresso em R$: R$ ' + (valorImg * 4.1));
  console.log('Valor total da Compra em US$: US$ '+ (valorImg * quant));
  console.log('Valor total da Compra em R$: R$ ' + (valorImg * quant * 4.1));
}
else{
  console.log('---Dados da Compra---');
  console.log('Nome do Cliente: ' + nome );
  console.log('Tipo do Jogo: ' + tipo);
  console.log('Etapa do Jogo: ' + etapa);
  console.log('Categoria: ' + categoria);
  console.log('Quantidade de imgressos: ' + quant + ' ingressos');
  console.log('---Valores---');
  console.log('Valor do imgresso: R$ ' + valorImg );
  console.log('Valor total da Compra: R$ '+ (valorImg * quant));

}

}