//################Methode 1################
let personne={
    age:25,
    nom:"toto",
    prenom:"titi",
    afficher:function(){
        console.log("Je suis ",this.prenom," ",this.nom," et j'ai ",this.age," ans")
    }
}

personne.afficher()
personne.age=30
personne.afficher()
personne.afficher=function(){
    console.log("Je suis ",this.prenom," ",this.nom," et j'ai ",this.age," ans et je suis un objet")
}
personne.afficher()
//################Methode 2################
function createPersonne(age,nom){
    let p={}
    p.age=age,
    p.nom=nom,
    p.afficher=function(){
            console.log(`Je suis ${p.nom}, et j'ai ${p.age} ans`)
    }
    return p
}
let p1=createPersonne(25,"toto")
p1.afficher()
let p2=createPersonne(30,"titi")
p2.afficher()

//################Methode 3################
function Personne(nom,age){
    this.age=age
    this.nom=nom
    this.afficher=function(){
        console.log("Je suis ",this.nom," et j'ai ",this.age," ans")
    }
}
let p3=new Personne("toto",25)

p3.afficher()
p3.age=30
p3.afficher()

