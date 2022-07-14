function abrir(programa, janela) {
    if (janela == "") {
        janela = "janela";
    }
    window.open(programa, janela, 'height=350,width=640');
}

//Não copia
function abrir2(pagina){
    window.open(pagina, "janela",'height=350,width=640');
}





      





function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
}  
function altereLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    //document.getElementById('tbl').deleteRow(i);
    document.getElementById('tbl').deleteRow(i);
}  

function retorna(retorno) {
    // Verifique se o opener existe e não está fechado
    if (window.opener && !window.opener.closed) {              
        window.opener.document.dados.codigo.value = retorno;
        window.close();
    } else {
        alert("Janela Pai não existente");
    }
}

function adicionaLinha() {
    var tabela = window.opener.document.getElementById("tbl");
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
    celula1.innerHTML = document.getElementById("txtProduto").value;
    celula2.innerHTML = document.getElementById("txtValor").value;
    celula3.innerHTML = "<button onclick='altereLinha(this)'>Alterar</button>";
    celula4.innerHTML = "<button onclick='removeLinha(this)'>Remover</button>";
    window.close();
}