"use strict";

var root = document.querySelector("#root");

var xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://dummyjson.com/todos?limit=100");

xhttp.onreadystatechange = function () {
    console.log(xhttp.readyState);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var resp = JSON.parse(xhttp.response);
        var data = resp.todos;
        console.log(data);
        updateTodos(data);
    }
};

xhttp.send();

function updateTodos(data) {
    var items = [];

    data.forEach(function (e) {
        //let user=React.createElement("div",{className:"user"},e.userId)
        //let todo=React.createElement("div",{className:"todo"},e.todo)
        //let completed=React.createElement("input",{type:"checkbox"},"")
        // let div=React.createElement("div",{className:"item"},user,todo,completed)
        var div = React.createElement(
            "div",
            { className: "item" },
            React.createElement(
                "div",
                null,
                "-"
            ),
            React.createElement(
                "div",
                { className: "user" },
                e.userId
            ),
            React.createElement(
                "div",
                { className: "todo" },
                e.todo
            ),
            React.createElement("input", { type: "checkbox", checked: e.completed })
        );
        items.push(div);
    });
    //let app=React.createElement("div",null,items)
    var app = React.createElement(
        "div",
        null,
        items
    );
    ReactDOM.render(app, root);
}
