const opçoes = document.querySelectorAll(".opçao");
for(const i of opçoes){
    i.addEventListener("click", greenborder);
};

function greenborder(e){
    if(e.target.)
    e.target.setAttribute("style", "border: 3px solid green;");
};