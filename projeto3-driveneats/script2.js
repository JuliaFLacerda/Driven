let arrcomida = [];
let arrbebida = [];
let arrsobremesa = [];
const opçoescomida = document.querySelectorAll(".comida");
const opçoesbebida = document.querySelectorAll(".bebida");
const opçoessobremesa = document.querySelectorAll(".sobremesa");

const button = document.querySelector(".donebutton");
for(const i of opçoescomida){
    i.addEventListener('click', seleçaocomida, false);
};
for(const i of opçoesbebida){
    i.addEventListener('click', seleçaobebida, false);
};
for(const i of opçoessobremesa){
    i.addEventListener('click', seleçaosobremesa, false);
};

function seleçaocomida(e){

    if(arrcomida.length === 0){
    arrcomida.push(this);
    arrcomida[0].classList.toggle("green");
    }
    else{
    arrcomida[0].classList.toggle("green");
    arrcomida.pop();
    arrcomida.push(this);
    this.classList.toggle("green");
    };
    if(arrbebida.length > 0 && arrcomida.length > 0 && arrsobremesa.length > 0){
        button.textContent = "Concluir pedido";
        button.style.cssText = "background-color: green;";
    }
}
function seleçaosobremesa(e){

    if(arrsobremesa.length === 0){
    arrsobremesa.push(this);
    arrsobremesa[0].classList.toggle("green");
    }
    else{
    arrsobremesa[0].classList.toggle("green");
    arrsobremesa.pop();
    arrsobremesa.push(this);
    this.classList.toggle("green");
    };
    if(arrbebida.length > 0 && arrcomida.length > 0 && arrsobremesa.length > 0){
        button.textContent = "Concluir pedido";
        button.style.cssText = "background-color: green;";
    }
}
function seleçaobebida(e){

    if(arrbebida.length === 0){
    arrbebida.push(this);
    arrbebida[0].classList.toggle("green");
    }
    else{
    arrbebida[0].classList.toggle("green");
    arrbebida.pop();
    arrbebida.push(this);
    this.classList.toggle("green");
    };

    if(arrbebida.length > 0 && arrcomida.length > 0 && arrsobremesa.length > 0){
        button.textContent = "Concluir pedido";
        button.style.cssText = "background-color: green;";
    }
}


