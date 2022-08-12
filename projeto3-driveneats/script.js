function selecionarsobremesa(num){

    let selecionado = document.querySelector('.sobremesa .green');

    if ( selecionado !== null){
        selecionado.classList.remove('green');
    }

    const seletor = '.'+num;    
    const div = document.querySelector(seletor);
    div.classList.add('green');
    selecionado = document.querySelector('.comida .green');
    const button = document.querySelector('.donebutton');
    const selecionado2 = document.querySelector('.bebida .green');
    const selecionado3 = document.querySelector('.comida .green');
    if(selecionado !== null && selecionado2 !== null && selecionado3 !== null){
        button.textContent = "Concluir pedido";
        button.style.cssText = "background-color: green;";
    }

}
function selecionarbebida(num){

    let selecionado = document.querySelector('.bebida .green');

    if ( selecionado !== null){
        selecionado.classList.remove('green');
    }

    const seletor = '.'+num;    
    const div = document.querySelector(seletor);
    div.classList.add('green');
    selecionado = document.querySelector('.comida .green');
    const button = document.querySelector('.donebutton');
    const selecionado2 = document.querySelector('.sobremesa .green');
    const selecionado3 = document.querySelector('.comida .green');
    if(selecionado !== null && selecionado2 !== null && selecionado3 !== null){
        button.textContent = "Concluir pedido";
        button.style.cssText = "background-color: green;";
    }

}
function selecionarcomida(num){

    let selecionado = document.querySelector('.comida .green');

    if ( selecionado !== null){
        selecionado.classList.remove('green');
    }

    const seletor = '.'+num;    
    const div = document.querySelector(seletor);
    div.classList.add('green');
    selecionado = document.querySelector('.comida .green');

    const button = document.querySelector('.donebutton');
    const selecionado2 = document.querySelector('.sobremesa .green');
    const selecionado3 = document.querySelector('.bebida .green');
    
    if(selecionado !== null && selecionado2 !== null && selecionado3 !== null){
        button.textContent = "Concluir pedido";
        button.style.cssText = "background-color: green;";
    }

}