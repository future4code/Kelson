
 
function cadastrar(){
    const aluno = {
        nome: "",
        idade: "",
        email: "",
    }
    let alunos = buscaItem("alunos");

    aluno.nome = document.querySelector("#nome").value;
    aluno.idade = document.querySelector("#idade").value;
    aluno.email = document.querySelector("#email").value;
    alunos.push(aluno);

    salvaItem("alunos", alunos);
   
}

let alunos = buscaItem("alunos");
let cont = 1;
while (cont <= alunos.length) {
    const inscritos = document.getElementById("inscritos");
    
    const inscricao = document.createElement("ul");
    inscricao.innerText= alunos[cont];

    inscritos.appendChild(inscricao);
    
    cont++;
}


function buscaItem(chave) {
    const valor = window.localStorage.getItem(chave);
    if (valor) {
      return JSON.parse(valor);
    }
    return [];
  }
  
  function salvaItem(chave, item) {
    if(item && chave) {
      window.localStorage.setItem(chave, JSON.stringify(item));
    }
  }