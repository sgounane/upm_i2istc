
(function(){
var a=25
function add(b){
    for(let i=0;i<5;i++){
        console.log("i: ",i)
    }
    for(var j=0;j<5;j++){
        console.log("j: ",j)
    }
    console.log("out j: ",j)
    //console.log("out i: ",i)    //erreur
    return a+b
}
let c=add(13)
console.log("c: ",c)    
})()

function fact(n){
    if(n==0){
        return 1
    }
    return n*fact(n-1)
}
c=fact(4)
console.log("Final c: ",c)