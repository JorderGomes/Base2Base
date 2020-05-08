// ================================ RESET ================================

class baseNumerica{
    constructor(nome, base){
        this.nome = nome;
        this.base = base;
    }
}

var bases = [
    new baseNumerica("binario", 2), 
    new baseNumerica("octal", 8), 
    new baseNumerica("decimal", 10)
];

var valorNum = document.getElementById("numero");
var erBinario = /[0-1]/;

// ================================ VALIDAÇÕES ================================
valorNum.addEventListener("keyup", function(e) {
  // prevent: "e"
  if ([69].includes(e.keyCode)) {
    e.preventDefault();
  }
  validacao();
});

document.querySelector("#De").addEventListener("change", function(){
    console.log("Mudei e vou zerar o campo numero");
    document.querySelector("#numero").value = "";
});


function validacao(){
    var nBase = document.querySelector("#De").value;;
    
    if(nBase == "binario"){
        document.querySelector("#numero").value 
    = document.querySelector("#numero").value.replace(/[^0-1]/g, "");    
    }
    else if (nBase == "octal"){
        document.querySelector("#numero").value 
    = document.querySelector("#numero").value.replace(/[^0-7]/g, "");
        console.log("regex 8");
    }
    
    
}

// ================================ DISPACHANTE ================================
document.querySelector("#converter").addEventListener('click', 
    function converter(){
        var de = document.querySelector("#De").value; 
        var para = document.querySelector("#Para").value; 
        var numero = document.querySelector("#numero").value;

        seletor(de, para, numero);

        if( de == para){
            equalsTypes();
        }
        
    }
);

// ================================ SELEÇÃO DE BASE ================================

function seletor(de, para, numero){
    var baseDe, basePara, conDecimal, conPara;
    baseDe = getBase(de);
    basePara = getBase(para);

    conDecimal = anyToDec(baseDe, numero);
    conPara = decToAny(basePara, conDecimal);

    gravarResposta(conPara);
}

function gravarResposta(lista){
    var i, local;
    for(i = lista.length - 1; i >= 0; i--){
        local = document.getElementById("resposta").innerHTML;
        local = local + lista[i];
        document.getElementById("resposta").innerHTML = local;
    }
}

function getBase(nomeBase){
    var iterador;
    for (iterador = 0; iterador < bases.length; iterador++){
        if(nomeBase == bases[iterador].nome){
            return bases[iterador].base;
        }
    }
    return -1;
}









// ================================ FUNCÕES DE CONVERSÃO ================================

function anyToDec(base, numero){
    var array = [];
    var digito, indiceDigito = 0, indiceExpoente, dec = 0, potBase;

    while (numero > 0){
        digito = numero % 10;
        array.unshift(digito);
        numero = parseInt(numero / 10);
    }


    for(indiceExpoente = array.length-1; indiceExpoente >= 0; indiceExpoente--){
        potBase = Math.pow(base, indiceExpoente);
        dec += array[indiceDigito] * potBase;
        indiceDigito++;
    }
    return dec;
}


function decToAny(base, numero){
    var array = [];
    while (numero > 1) {
    array.push(numero % base);
    numero =  parseInt(numero / base);
   }
   array.push(numero);
   
   return array;
}


function equalsTypes(){
    alert("Bases iguais");
}




























// document.querySelector("#add").addEventListener('click',
//     function adicionarRegistro() {
//         console.log("Inicio");
//         var disciplina = document.querySelector("#inputDisciplina").value;
//         var professor = document.querySelector("#inputProfessor").value;
//         var sala = document.querySelector("#inputSala").value;
//         var bloco = document.querySelector("#inputBloco").value;
//         var horario = document.querySelector("#inputHorario").value;
//         console.log("Valores carregados");
        
//         var tabela = document.getElementById('tabela');
//         var numeroLinhas = tabela.rows.length;
//         var linha = tabela.insertRow(numeroLinhas);
//         console.log("Tabela carregada");

//         var celula1 = linha.insertCell(0);
//         var celula2 = linha.insertCell(1);
//         var celula3 = linha.insertCell(2);
//         var celula4 = linha.insertCell(3);
//         var celula5 = linha.insertCell(4);
//         console.log("Celulas inseridas na linha");

//         celula1.innerHTML = disciplina;
//         celula2.innerHTML = professor;
//         celula3.innerHTML = sala;
//         celula4.innerHTML = bloco;
//         celula5.innerHTML = horario;
//         console.log("Conteúdo inserido nas celulas");
//     }
// 