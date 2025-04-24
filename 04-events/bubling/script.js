let u=document.querySelector(".un");
let d=document.querySelector(".deux");
let t=document.querySelector(".trois");

t.addEventListener("click", (e) => {
    console.log("trois click");
    e.stopPropagation();
}
);

d.addEventListener("click", (e) => {
    console.log("deux click");
    e.stopPropagation();
}
);

u.addEventListener("click", (e) => {
    console.log("un click");
    e.stopPropagation();
}
);