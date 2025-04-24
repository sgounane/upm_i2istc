let outer=document.querySelector(".outer");
let inner=document.querySelector(".inner");

outer.addEventListener("mousemove", (e) => {
    inner.style.top=(e.clientY-inner.clientHeight/2)+"px";
    inner.style.left=(e.clientX-inner.clientWidth/2)+"px";
})