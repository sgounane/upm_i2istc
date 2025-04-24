let sec_elem=document.querySelector("#secondes");
let min_elem=document.querySelector("#minutes");
let h_elem=document.querySelector("#heures");






function update(){
    let date=new Date();
    let sec=date.getSeconds();
    let mins=date.getMinutes();
    let hs=date.getHours();
    let sd=360/60;
    let md=360/(60*60);
    let hd=360/(12*60*60);
    sec_elem.setAttribute("transform", `rotate(${sec*sd})`);
    min_elem.setAttribute("transform", `rotate(${mins*60*md})`);
    h_elem.setAttribute("transform", `rotate(${hs*3600*hd})`);

}

setInterval(update,1000);