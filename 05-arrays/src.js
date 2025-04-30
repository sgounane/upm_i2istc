let root=document.querySelector("#root")
let addbtn=document.querySelector("#add")
let input=document.querySelector("#input")

let data=["said", "reda", "nour", "mehrdi","niama"]



function addName(v){
    data.push(v);
    update(data)
}

addbtn.addEventListener("click", (e)=> addName(input.value))

function removeElem(i){
    console.log(i)
    data.splice(i,1)
    update(data)
}

function update(data){
    root.innerHTML=""
    data.forEach((e,i) => {
        let div=document.createElement("div")
        div.setAttribute("id",i)
        div.setAttribute("class","item")
        let del=document.createElement("button")
        del.innerText="X"
        del.addEventListener("click",()=>removeElem(i))
        let txtdiv=document.createElement("div")
        txtdiv.innerText=e
        div.appendChild(txtdiv)
        div.appendChild(del)
        root.appendChild(div)
    });
}

update(data)