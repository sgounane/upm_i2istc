//liste des proprietés des objets
let props=[]
//Liste des objets
let objs=[]
//pour l'arret de la boucle 1
let p="";
//pour l'arret de la boucle 2
let next="y"
console.log("Enter a property name (end to stop):")

//recuperation des noms des propriétés
while(p!="end"){
    p=prompt("Enter a property name (end to stop):")
    if(p!="end") props.push(p)
}
console.log(props)
//création des objets
do{
    let obj={}
    for(pr of props){
        obj[pr]=prompt(`Enter the value of ${pr}`)
    }
    objs.push(obj)  
    next=prompt("Next object (y/n)")
}while(next=="y")
//affichage de la liste
console.log("--------Liste----------")
for(o of objs){
    let str=""
    for(p in o){
        str+=o[p]+" "
    }
    console.log(str)
}

//proprietes d'objets

let code=123
let score=2435
let username="anas"
let player={username,code,score}
/*
let player={
    username: username,
    score: score,
    code: code
}
*/
console.log(player.username, player.score)