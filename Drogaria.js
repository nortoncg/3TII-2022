class Drogaria{
    id;
    nome;

    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }

    enviarMedicamentos(){
       alert(this.nome);
    }
}