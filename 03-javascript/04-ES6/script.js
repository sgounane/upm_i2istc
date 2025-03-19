//Destructuration d'objet
const etudiant={
    nom: "Doe",
    prenom: "John",
    age: 25,
}

const {nom, prenom, age} = etudiant;
//const {age}=etudiant;
console.log(nom, prenom, age);  

//Proprietés d'objet dynamiques
let a="nom";
let b="age";

let e={
    a:"said",
    b:25
}
let f={
    [a]:"said",
    [b]:25  
}
console.log(e,f)