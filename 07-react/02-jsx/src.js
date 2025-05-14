let {createElement}=React
let {render}=ReactDOM

const root=document.querySelector("#root");

//let h=createElement("H1",null,"Bonjour")
let h=<h1>Bonjour</h1>
render(h,root)