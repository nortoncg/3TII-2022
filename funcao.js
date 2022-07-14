function calcularMedia3Notas(nota1, nota2, nota3){
    var media = (nota1+nota2+nota3)/3;
    return media;
}
function calcularMedia2Notas(nota1, nota2){
    var media = (nota1+nota2)/2;
    return media;
}

function retornaCondicao(media){
    if(media >= 7 || media <=10 ){
        return "Aprovado com Sucesso";
    }
    if(media <6){
        return "Reprovado";
    }
}

function recebeNotasEmFloat(numero){
    return parseFloat(prompt("Digite a nota " + numero));
}

function recebeNotasEmInt(numero){
    return parseInt(prompt("Digite a nota " + numero));
}

