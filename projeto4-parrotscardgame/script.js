let nomedasCartas = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"]
let lastname = null;
let lastcard = 0;
let counter = 0;

    let cardnum = prompt("Por favor insira um número de cartas entre 4 e 14");
    while(cardnum <4 || cardnum >14){
        cardnum = prompt("Por favor insira um número de cartas entre 4 e 14");
    }
    nomedasCartas = nomedasCartas.slice(0,(cardnum));
    nomedasCartas.sort(function () { 
        return Math.random() - 0.5; 
    });
    const container = document.querySelector('.cardcontainer')
    for(let i = 0; i < cardnum;i++){
      let newcard = document.createElement('div');
      newcard.classList.add("card");
      newcard.dataset.name = nomedasCartas[i]
      let cardimg = document.createElement('img');
      cardimg.src = "img/front.png";
      cardimg.classList.add("cardimg");
      newcard.appendChild(cardimg);
      container.appendChild(newcard);
    };

let cartas = document.querySelectorAll('.card');
for(const i of cartas){
    i.addEventListener('click', game);
}

function game(e){
if(this.dataset.fixed != "fixed"){    
    if(lastname === null){
        lastname = this.dataset.name;
        lastcard = this;
        let firstChild = lastcard.firstElementChild; 
        firstChild.src = "img/" + lastcard.dataset.name + "parrot.gif";
        counter++;
    }
    else{
        if(this.dataset.name === lastname){
            //here
        lastname = null;
        //anterior fixada
        lastcard.dataset.fixed = "fixed";
        lastcard = this;
        //atual fixada
        lastcard.dataset.fixed = "fixed";
        //imagem da atual colocada
        lastname = lastcard.dataset.name;
        let firstChild = lastcard.firstElementChild; 
        firstChild.src = "img/" + lastname + "parrot.gif";
        counter++
        lastcard = null;
        lastname = null;

        }
        else{
            //imagem da anterior revertida
        let firstChild = lastcard.firstElementChild; 
        firstChild.src = "img/front.png";
        //atual selecionada
        lastcard= this;
        firstChild = lastcard.firstElementChild; 
        //imagem da atual colocada
        lastname = this.dataset.name;
        firstChild.src = "img/" + lastname + "parrot.gif";
        //lastname é da atual
        counter++;
        }
    }
};
//then check for win
}

//not shuffling apropriadamente