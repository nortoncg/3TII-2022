class Exame extends Servico{
medidaPreventiva;
tipoDeExame;

constructor(descricao, preco, medidaPreventiva, tipoDeExame){
    super(descricao);
    super(preco);
    this.medidaPreventiva = medidaPreventiva;
    this.tipoDeExame = tipoDeExame;
}

}