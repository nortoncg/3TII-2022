class Professor extends Pessoa {

    leciono;
    siape;
  
    constructor(name, leciono, siape) {
      super(name);
      this.leciono = leciono;
      this.siape = siape;
    }
  
    introduceSelf() {
      console.log(`Meu nome é ${this.name}, e eu serei seu professor na matéria ${this.leciono}.`);
      //alert("Coisinha de Jesus");
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }

    getNome(){
      console.log(this.name);
    }

    getLeciono(){
      console.log(this.leciono);
    }
  
  }