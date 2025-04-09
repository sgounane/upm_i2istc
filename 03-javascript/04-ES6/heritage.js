class Homme{
    constructor(n, a){
        this.nom = n;
        this.age = a;
    }
    sayHello(){
        console.log(`Je suis ${this.nom} et j'ai ${this.age} ans`);
    }
}

let h=new Homme("Anas", 23);

class Etudiant extends Homme{
    constructor(n,a, note){
        super(n, a);
        this.note = note;
    }
    getNote(){
        console.log(`Note: ${this.note}`);
    }
}

let e=new Etudiant("Anas", 23, 12);