
 
function cadastrar(){
    const aluno = {
        nome: "",
        idade: "",
        email: "",
    }
    let alunos = buscaItem("alunos");

    console.log('aluno');
    aluno.nome = document.querySelector("#nome").value;
    aluno.idade = document.querySelector("#idade").value;
    aluno.email = document.querySelector("#email").value;
    alunos.push(aluno);

    salvaItem("alunos", alunos);
   
    while (cont <= alunos.length) {
        const inscritos = domcument.grtElementById("#inscritos");
        
        const incricao = domcument.createElement()
    }

    function criarTarefa(){
        const nomeDaNovaTarefa = document.getElementById("novaTask").value;
        const diaDaSemanaSelecionado = document.getElementById("diaDaSemana").value;
        const listaDeTarefasSelecionada = document.querySelector("#" + diaDaSemanaSelecionado + " > .content")
        
        const novaTarefa = document.createElement("li");
        novaTarefa.innerText = nomeDaNovaTarefa;
        novaTarefa.onclick = riscaTarefa;
​
        if(nomeDaNovaTarefa !== ""){
            listaDeTarefasSelecionada.append(novaTarefa);
            limpaCampo();
        } else {
            alert("Opa! Você não inseriu o nome da tarefa");
        }
    }
​
    function apagaTodasAsTarefas(){
        const todasAsTarefas = document.querySelectorAll(".content")
        
        if(confirm("Você tem certeza que deseja apagar todas as tarefas?")){
            for(let diaDaSemana of todasAsTarefas){
                diaDaSemana.innerHTML = "";
            }
        }
    }
​
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