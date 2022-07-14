function coisinhaDeJesus(){
    alert("Norton");
}

function pegaNome(){
    var nome = prompt("Digite seu nome:");
    return nome;
}

function calculaMediade3Notas(){
    var nota1 = parseFloat(prompt("Digite a nota 1: "));
    var nota2 = parseFloat(prompt("Digite a nota 2: "));
    var nota3 = parseFloat(prompt("Digite a nota 3: "));

    var media = (nota1+nota2+nota3)/3;
    return media;
}

function calculaMediaDe2Notas(nota1, nota2){
    var media = (nota1+nota2)/2;
    return media;
}

function pegaNotaPorPrompt(numero){
    var nota = prompt("Digite a nota " + numero + ": ");
    return parseInt(nota);
}

function calculaMaiorEMenor(num1, num2, num3){
    alert("Maior Número:" + Math.max(num1, num2, num3));
    alert("Menor Número:" + Math.min(num1, num2, num3));
}