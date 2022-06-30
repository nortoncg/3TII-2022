class Person {

    name;
    cpf;
    dt_nasc;
  
    constructor(name, cpf, dt_nasc) {
      this.name = name;
      this.cpf = cpf;
      this.dt_nasc = dt_nasc;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
    cadastrar(){
      var pNovaPessoa = new pPessoa(this.nome, this.cpf, this.dt_nasc)
      pNovaPessoa.cadastrar();
    }
    
    imprimir(){

    }

    getNome(){
      return this.name;
    }

    setNome(name){
      this.name = name;
    }
  }