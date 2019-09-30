class Despesa  {
    constructor(tipo, valor, descricao){
        this.tipo = tipo;
        this.valor = valor;
        this.descricao = descricao;
    }
}
let despesas = new Array();

function criar(){
    const valor = document.getElementById('valor').value;
    const tipo = document.getElementById('tipo-de-despesas').value;
    const descricao = document.getElementById('descricao').value;

    if (valor !== ""){
        if (tipo !== ""){
            if (descricao !== ""){
                const despesa = new Despesa;

                despesa.valor = parseInt(valor);
                despesa.tipo = tipo; 
                despesa.descricao = descricao;
                
                document.getElementById('valor').value = "";
                document.getElementById('tipo-de-despesas').value = "";
                document.getElementById('descricao').value = "";
            
                despesas.push(despesa);
            }
            else{
                alert("Digite uma descrição.")
            }
        }
        else{
            alert("Selecione um tipo.")
        }
    }
    else{
        alert("Digite um valor.")
    }
};
function exibir(){
    const exibe = document.getElementById('filtro');
    let selecao = new Array()
    const tipo = document.getElementById('seletor-tipo-de-despesas').value;
    const maximo = document.getElementById('valor-maximo').value;
    const minimo= document.getElementById('valor-minimo').value;
    document.getElementById('filtro').innerHTML = "";
    switch (tipo)   {
        case "Casa":
            selecao = despesas.filter((despesa)=>{ return despesa.tipo === "Casa"})
            break;
        case "Festas":
            selecao = despesas.filter((despesa)=>{ return despesa.tipo === "Festas"})
            break;
        case "Viagem":
            selecao = despesas.filter((despesa)=>{ return despesa.tipo === "Viagem"})
            break;
        case "Alimentacao":
            selecao = despesas.filter((despesa)=>{ return despesa.tipo === "Alimentacao"})
            break;
        case "":
            selecao = despesas;
            break;
    };
    if(maximo !== ''){
        selecao = selecao.filter((despesa)=>{ return despesa.valor < maximo });
    };
    if(minimo !== ''){
        selecao = selecao.filter((despesa)=>{ return despesa.valor > minimo });
    };

    selecao.forEach((despesa) =>{
        exibe.innerHTML +=  "<div> <p>R$ " + despesa.valor+ "</p> <p>Tipo: " + despesa.tipo + "</p> <p>Descrição: " + despesa.descricao + "</p> </div>"
    })
};

function apagar(){
    const filtro = document.getElementById('filtro');
    filtro.innerHTML = "";
}
function soma(){
    let axi = 0;
    despesas.forEach((despesa)=>{ 
        axi += despesa.valor;});
    const total = document.getElementById('valor-total');
    total.innerHTML = "R$ " + axi;
}


function exibir2() {
    const exibe2 = document.getElementById('despesas');
    exibe2.innerHTML = "";
    despesas.forEach((despesa) =>{
        exibe2.innerHTML += "<div class='despesa'> <p>R$ " + despesa.valor + "</p> <p> Tipo: " + despesa.tipo + "</p> </div>"    
    })
}