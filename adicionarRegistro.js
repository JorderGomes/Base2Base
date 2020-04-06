document.querySelector("#add").addEventListener('click',
    function adicionarRegistro() {
        console.log("Inicio");
        var disciplina = document.querySelector("#inputDisciplina").value;
        var professor = document.querySelector("#inputProfessor").value;
        var sala = document.querySelector("#inputSala").value;
        var bloco = document.querySelector("#inputBloco").value;
        var horario = document.querySelector("#inputHorario").value;
        console.log("Valores carregados");
        //var sobrenome = document.querySelector("#sobrenome").value;
        //var email = document.querySelector("#email").value;
        // var tabela = document.querySelector("#tabela");
        var tabela = document.getElementById('tabela');
        var numeroLinhas = tabela.rows.length;
        var linha = tabela.insertRow(numeroLinhas);
        console.log("Tabela carregada");

        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        var celula4 = linha.insertCell(3);
        var celula5 = linha.insertCell(4);
        console.log("Celulas inseridas na linha");

        celula1.innerHTML = disciplina;
        celula2.innerHTML = professor;
        celula3.innerHTML = sala;
        celula4.innerHTML = bloco;
        celula5.innerHTML = horario;
        console.log("Conteúdo inserido nas celulas");
    }
)