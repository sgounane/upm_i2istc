let root=document.querySelector("#root");

function addDiv(n){
    let cube=document.createElement("div");
    cube.classList.add("cube");
    cube.innerText=n;
    root.appendChild(cube);
}

function addDiv0(n){
    let elem=`<div class="cube">${n} <span> (: </span></div>`;
    root.innerHTML+=elem;
}

let n=0
let I=setInterval(()=> {addDiv0(n); n++; if(n>10) clearInterval(I)},1000);
