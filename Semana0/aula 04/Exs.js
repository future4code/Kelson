//ex_1()
//ex_2()
//ex_3()
//ex_3_o2()


function ex_1(){

  let numb = Number(prompt('Entre com um numero no intervalo 1 a 20'));
  let resp;
  let cont = 0


  while (resp !== numb){
    resp = Number(prompt('Qual é seu palpite?'));
    cont++;
    if (resp > numb){
      confirm('Seu palpite é maior que o numero.');
    }
    else if(resp < numb){
      confirm('Seu palpite é menor que o numero.');
    }
  }
  confirm('Acertou o numero. Em ' + cont + ' tentativas.');
}

function ex_2(){
  let numb = Math.floor((Math.random() * 100) + 1);
  let resp;
  let cont = 0

  while (resp !== numb){
    resp = Number(prompt('Qual é seu palpite?'));
    cont++;
    if (resp > numb){
      confirm('Seu palpite é maior que o numero.');
    }
    else if(resp < numb){
      confirm('Seu palpite é menor que o numero.');
    }
 } 
 confirm('Acertou o numero. Em ' + cont + ' tentativas.');
}

function ex_3(){
  let numb = Math.floor((Math.random() * 100) + 1);
  let resp = 50;
  let cont = 0;
  let max = 100;
  let min = 1;

  while(resp !== numb ){
    cont++
    if (resp < numb){
      min = resp;
      resp = Math.floor((max + min)/2);
    }
    else if(resp > numb){
      max = resp;
      resp = Math.floor((max + min)/2);
    }
  }
  console.log('Acertou o numero. Em ' + cont + ' tentativas.');
}

function ex_3_o2(){
  let numb = Math.floor((Math.random() * 100) + 1);
  let resp = 50;
  let cont = 0;
  let max = 100;
  let min = 1;

  while (resp !== numb){
    cont++
    if (resp < numb){
      min = resp;
      resp = Math.floor((Math.random() * (max - min)) + min + 1);

    }
    else if(resp > numb){
      max = resp;
      resp = Math.floor((Math.random() * (max - min)) + min + 1);
    }
    console.log(resp)
  }
  console.log('Acertou o numero : ' + resp + '. Em ' + cont + ' tentativas.');
}