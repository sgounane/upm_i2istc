const div=document.querySelector("#root")
let h=React.createElement("h1",{id:"titre", className:"titre"},"Bonjour")
let p=React.createElement("p",null,"ceci est un petit paragraphe")
let items=[]
for(let i=0;i<20;i++){
    let e=React.createElement("li",null,i**2)
    items.push(e)
}
let ul=React.createElement("ul",null,items)

let d=React.createElement("div",null,h,p,ul)
ReactDOM.render(d,div)
// Ceci est equivalent à ça:
/*
let h=document.createElement("h1")
h.setAttribute("id","titre")
h.setAttribute("class","titre")
let txt=document.createTextNode("Bonjour")
h.appendChild(txt)
root.appendChild(h)
*/