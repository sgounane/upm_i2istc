function Etudiant(nom,age){
    this.nom = nom;
    this.age = age;
}

Etudiant.prototype.sayHello = function(){
    console.log(`Je suis ${this.nom} et j'ai ${this.age} ans`);
}
Etudiant.prototype.size=0


class Student{
    constructor(nom,age){
        this.nom = nom;
        this.age = age;
    }
    sayHello(){
        console.log(`Je suis ${this.nom} et j'ai ${this.age} ans`);
    }
}

let e1 = new Etudiant("Anas", 23);
let s1= new Student("Anas", 23);

