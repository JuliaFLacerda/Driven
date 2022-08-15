function selecionarsobremesa(num){

    let selecionado = document.querySelector('.sobremesa .green');

    if ( selecionado !== null){
        selecionado.classList.remove('green');
    }

    num.classList.add('green');
    selecionado = document.querySelector('.sobremesa .green .tituloopçao');
    const button = document.querySelector('.donebutton');
    const whatsapp = document.querySelector('.whatsapp');
    const selecionado2 = document.querySelector('.bebida .green .tituloopçao');
    const selecionado3 = document.querySelector('.comida .green .tituloopçao');
    if(selecionado !== null && selecionado2 !== null && selecionado3 !== null){
        whatsapp.textContent = "Fechar pedido";
        button.style.cssText = "background-color: #32B72F;";
        let price1 = document.querySelector('.sobremesa .green .price');
        let price2 = document.querySelector('.bebida .green .price');
        let price3 = document.querySelector('.comida .green .price');
        let sumprices = (parseFloat(price1.textContent.replace(/,/, '.').slice(3, price1.length)) + parseFloat(price2.textContent.replace(/,/, '.').slice(3, price2.length)) + parseFloat(price3.textContent.replace(/,/, '.').slice(3, price3.length))).toFixed(2);
        function pedir(){
            let nome = prompt("Nome: ");
            let endereço = prompt("Endereço: ");
            string = "Olá, gostaria de fazer o pedido:\n- Prato: " + selecionado.textContent + "\n - Bebida: " + selecionado3.textContent + "\n - Sobremesa: " + selecionado2.textContent + "\n Total: " + sumprices + "\n" + "\nNome: " + nome + "\nEndereço: " + endereço;
            stringfeita = encodeURIComponent(string);
            whatsapp.href = "https://wa.me/+5512991799057?text=" + stringfeita;
        };
        button.addEventListener('click', pedir);
    }

}
function selecionarbebida(num){

    let selecionado = document.querySelector('.bebida .green');

    if ( selecionado !== null){
        selecionado.classList.remove('green');
    }

   num.classList.add('green');
    selecionado = document.querySelector('.bebida .green .tituloopçao');
    const button = document.querySelector('.donebutton');
    const whatsapp = document.querySelector('.whatsapp');
    const selecionado2 = document.querySelector('.sobremesa .green .tituloopçao');
    const selecionado3 = document.querySelector('.comida .green .tituloopçao');
    if(selecionado !== null && selecionado2 !== null && selecionado3 !== null){
        whatsapp.textContent = "Fechar pedido";
        button.style.cssText = "background-color: #32B72F;";
        let price1 = document.querySelector('.bebida .green .price');
        let price2 = document.querySelector('.sobremesa .green .price');
        let price3 = document.querySelector('.comida .green .price');
        let sumprices = (parseFloat(price1.textContent.replace(/,/, '.').slice(3, price1.length)) + parseFloat(price2.textContent.replace(/,/, '.').slice(3, price2.length)) + parseFloat(price3.textContent.replace(/,/, '.').slice(3, price3.length))).toFixed(2);
        function pedir(){
            let nome = prompt("Nome: ");
            let endereço = prompt("Endereço: ");
            string = "Olá, gostaria de fazer o pedido:\n- Prato: " + selecionado.textContent + "\n - Bebida: " + selecionado3.textContent + "\n - Sobremesa: " + selecionado2.textContent + "\n Total: " + sumprices + "\n" + "\nNome: " + nome + "\nEndereço: " + endereço;
            stringfeita = encodeURIComponent(string);
            whatsapp.href = "https://wa.me/+5512991799057?text=" + stringfeita;
        };
        button.addEventListener('click', pedir);
    }

}
function selecionarcomida(num){

    let selecionado = document.querySelector('.comida .green');

    if ( selecionado !== null){
        selecionado.classList.remove('green');
    }

    num.classList.add('green');
    selecionado = document.querySelector('.comida .green .tituloopçao');

    const button = document.querySelector('.donebutton');
    const whatsapp = document.querySelector('.whatsapp');
    const selecionado2 = document.querySelector('.sobremesa .green .tituloopçao');
    const selecionado3 = document.querySelector('.bebida .green .tituloopçao');
    
    if(selecionado !== null && selecionado2 !== null && selecionado3 !== null){
        whatsapp.textContent = "Fechar pedido";
        button.style.cssText = "background-color: #32B72F;";
        let price1 = document.querySelector('.comida .green .price');
        let price2 = document.querySelector('.sobremesa .green .price');
        let price3 = document.querySelector('.bebida .green .price');
        let sumprices = (parseFloat(price1.textContent.replace(/,/, '.').slice(3, price1.length)) + parseFloat(price2.textContent.replace(/,/, '.').slice(3, price2.length)) + parseFloat(price3.textContent.replace(/,/, '.').slice(3, price3.length))).toFixed(2);
        let string = "";
        function pedir(){
            let nome = prompt("Nome: ");
            let endereço = prompt("Endereço: ");
            string = "Olá, gostaria de fazer o pedido:\n- Prato: " + selecionado.textContent + "\n - Bebida: " + selecionado3.textContent + "\n - Sobremesa: " + selecionado2.textContent + "\n Total: " + sumprices + "\n" + "\nNome: " + nome + "\nEndereço: " + endereço;
            stringfeita = encodeURIComponent(string);
            whatsapp.href = "https://wa.me/+5512991799057?text=" + stringfeita;
        };
        button.addEventListener('click', pedir);
    }

}

