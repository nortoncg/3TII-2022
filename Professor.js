class Professor extends Person {

    teaches;
  
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(`Meu nome é ${this.name}, e eu serei seu professor na matéria ${this.teaches}.`);
      //alert("Coisinha de Jesus");
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }

    getNome(){
      console.log(this.nome);
    }
  
  }