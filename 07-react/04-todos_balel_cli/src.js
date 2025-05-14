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
    let items=[]
    
    data.forEach(e => {
        //let user=React.createElement("div",{className:"user"},e.userId)
        //let todo=React.createElement("div",{className:"todo"},e.todo)
        //let completed=React.createElement("input",{type:"checkbox"},"")
       // let div=React.createElement("div",{className:"item"},user,todo,completed)
        let div=(<div className="item">
            <div>-</div>
            <div className="user">{e.userId}</div>
            <div className="todo">{e.todo}</div>
            <input type="checkbox" checked={e.completed}></input>
        </div>)
        items.push(div)
    });
    //let app=React.createElement("div",null,items)
    let app=(<div >
        {items}
    </div>)
    ReactDOM.render(app,root)
}