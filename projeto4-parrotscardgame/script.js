let lastname = null;
let lastcard = 0;
let counter = 0;

function preparartabuleiro(){
    let nomedasCartas = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"]
    let cardnum = prompt("Por favor insira um número de cartas entre 4 e 14");
    while(cardnum <4 || cardnum >14 || cardnum % 2 != 0){
        cardnum = prompt("Por favor insira um número de cartas entre 4 e 14");
    }
    nomedasCartas = nomedasCartas.slice(0,(cardnum));
    nomedasCartas.sort(function () { 
        return Math.random() - 0.5; 
    });
    const container = document.querySelector('.cardcontainer');
    for(let i = 0; i < cardnum;i++){
      let newcard = document.createElement('div');
      newcard.classList.add("card");
      newcard.dataset.name = nomedasCartas[i];
      container.appendChild(newcard);
    };
}
preparartabuleiro();

function prepararjogo(){
let cartas = document.querySelectorAll('.card');
for(const i of cartas){
    i.addEventListener('click', game);
};
}

prepararjogo();

function game(e){
if(this.dataset.fixed != "fixed"){    
    if(lastname === null){
        lastname = this.dataset.name;
        lastcard = this;
        lastcard.classList.add("" + lastcard.dataset.name);
        counter++;
    }
    else{
        if(this.dataset.name === lastname && lastcard != this){
        lastname = null;
        this.classList.add("" + this.dataset.name);
        lastcard.dataset.fixed = "fixed";
        lastcard = this;
        lastcard.dataset.fixed = "fixed";
        counter++;
        lastcard = null;
        lastname = null;

        }
        else if(this.dataset.name != lastname && lastcard != this){
        let currentcard = this;
        this.classList.add("" + this.dataset.name);
         setTimeout(virarasduas, 1000, currentcard, lastcard);
        lastcard= null;
        lastname = null;
        counter++;
        }
        else{

        }
    }
};
let vartrue = false;
let cartas = document.querySelectorAll('.card');
for(const i of cartas){
    if(i.dataset.fixed === "fixed"){
        vartrue = true;
    }
    else{
        vartrue = false;
        break;
    }
};
if(vartrue === true){
    alert("Você ganhou em " + counter + " jogadas!");
    counter = 0;
    clearInterval(myInterval);
    sec = 0;
    let recomeçar = false;
    while(!(recomeçar)){
        recomeçar = prompt("Você gostaria de recomeçar a partida?");
        if(recomeçar === "sim"){
            timecounter.textContent = 0;
            myInterval = setInterval(umsegundo, 1000);
            removercartas();
            recomeçar = true;
            preparartabuleiro();
            prepararjogo();
        };
        if(recomeçar === "não"){
            removercartas();
            break;
        }
    }
}
}

function virarasduas(currentcard, lastcard){
    currentcard.classList.remove("" + currentcard.dataset.name);
    lastcard.classList.remove("" + lastcard.dataset.name);
}

function removercartas(){
    let container = document.querySelector('.cardcontainer');
    const main = document.querySelector('main');
    main.removeChild(container);
    container = document.createElement('div');
    container.classList.add("cardcontainer");
    main.appendChild(container);
}


let timecounter = document.querySelector('span');
let sec = 0;
function umsegundo(){
        sec++;
        timecounter.textContent = sec;
}
let myInterval = setInterval(umsegundo, 1000);