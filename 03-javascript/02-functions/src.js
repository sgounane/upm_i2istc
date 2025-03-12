console.log("src.js --- a: ", a);
for(let i=0;i<5;i++){
    console.log("src.js --- i: ",i)
}
for(var j=0;j<5;j++){
    console.log("src.js --- j: ",j)
}
console.log("src.js --- out j: ",j)
//console.log("src.js --- out i: ",i)    //erreur
function add(b){
    return a+b
}
let c=add(13)
console.log("src.js --- c: ",c)