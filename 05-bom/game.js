let cube=document.getElementById("inner")
let state=0;
let p=0;

cube.style.left=Math.floor(Math.random()*540)+"px";
let changecolor=() => {
    if(state==0){
        cube.style.backgroundColor="red";
        state=1
    }
    else{
        cube.style.backgroundColor="blue";
        state=0
    }
}

let move=() => {
    if(p>540) p=0;
    cube.style.top=p+"px";
    p+=10;
    changecolor()
}
setInterval(move, 100);