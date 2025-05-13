let root=document.querySelector("#root")

let xhttp=new XMLHttpRequest()

xhttp.open("GET","https://dummyjson.com/todos?limit=100")

xhttp.onreadystatechange=()=>{
    console.log(xhttp.readyState)
    if(xhttp.readyState==4 && xhttp.status==200){
        let resp=JSON.parse(xhttp.response)
        let data=resp.todos
        console.log(data)
        updateTodos(data)
    }
}

xhttp.send()


function updateTodos(data){
    root.innerHTML=""
    data.forEach(e => {
        let div=document.createElement("div")
        div.setAttribute("class","item")
        let user=document.createElement("div")
        user.setAttribute("class","user")
        user.innerText=e.userId
        let todo=document.createElement("div")
        todo.setAttribute("class","todo")
        todo.innerText=e.todo

        let completed=document.createElement("input")
        completed.setAttribute("type","checkbox")
        if(e.completed) completed.setAttribute("checked",e.completed)

        div.appendChild(user)
        div.appendChild(todo)
        div.appendChild(completed)
        root.appendChild(div)
    });
}