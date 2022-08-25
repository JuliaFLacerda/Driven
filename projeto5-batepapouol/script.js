let name = prompt("Qual seu lindo nome?");

let userobj = {name,}

const promessa1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", userobj)
promessa1.then(mensagemdeentrada);
promessa1.catch(erronaentrada);

function prepararmensagens(){
//busca mensagens e coloca elas na tela;
    const body = document.querySelector('body');
    let main = document.querySelector('main');
    body.removeChild(main);
    main = document.createElement('main');
    body.appendChild(main);
    main = document.querySelector('main');
    const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promessa.then(mensagensnatela);
    promessa.catch("Ocorreu um erro, recarregue a página")
    function mensagensnatela(resposta){
    let mensagens = resposta.data;
    for(let i = 0; i < mensagens.length;i++){
        /*from: "João",
		to: "Todos",
		text: "entra na sala...",
		type: "status",
		time: "08:01:17"*/
        //aqui tem branching de type, o abaixo é pra status
        if(mensagens[i].type === "status"){
            let newmsg = document.createElement('div');
            newmsg.classList.add("" + mensagens[i].type);
            main.appendChild(newmsg);
            let horario = document.createElement('div');
            horario.classList.add("horario");
            horario.textContent = mensagens[i].time;
            newmsg.appendChild(horario);
            let user = document.createElement('div');
            user.classList.add("username");
            user.textContent = mensagens[i].from;
            newmsg.appendChild(user);
            let anuncio = document.createElement('div');
            anuncio.classList.add("anuncio");
            anuncio.textContent = mensagens[i].text;
            newmsg.appendChild(anuncio);
        }
        else if(mensagens[i].type === "message"){
            let newmsg = document.createElement('div');
            newmsg.classList.add("" + mensagens[i].type);
            main.appendChild(newmsg);
            let horario = document.createElement('div');
            horario.classList.add("horario");
            horario.textContent = mensagens[i].time;
            newmsg.appendChild(horario);
            let user = document.createElement('div');
            user.classList.add("username");
            user.textContent = mensagens[i].from;
            newmsg.appendChild(user);
            let anuncio = document.createElement('div');
            anuncio.classList.add("anuncio");
            anuncio.textContent = "para";
            newmsg.appendChild(anuncio);
            let to = document.createElement('div');
            to.classList.add("anuncio");
            to.textContent = mensagens[i].to + ": ";
            newmsg.appendChild(to);
            let conteudo = document.createElement('div');
            conteudo.classList.add("username");
            conteudo.textContent = mensagens[i].text;
            newmsg.appendChild(conteudo);
        }
    };
    let lastmessage = document.querySelector('.last');
    if(lastmessage != null){
        lastmessage.classList.remove("last");
        lastmessage = main.lastChild;
        lastmessage.classList.add("last");
        lastmessage.scrollIntoView();
    }
    else{
        lastmessage = main.lastChild;
        lastmessage.classList.add("last");
        lastmessage.scrollIntoView();
    }

}
};

function erronaentrada(erro){
    while(erro.response.status === 400){
        name = prompt("Qual seu lindo nome?");
    };
}

const checagem = setInterval(aindaonline, 5000, userobj);

function aindaonline(user){
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", user);
    promessa.catch(saiudasala)
}

const botaoenviar = document.querySelector('.enviar');
const mensagemaenviar = document.querySelector('.envie-mensagem');
botaoenviar.addEventListener('click', enviarmensagem);

function enviarmensagem(){
    let obj = {
        from: (userobj.name),
        to: "Todos",
        text: mensagemaenviar.value,
        type: "message",
    }
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", obj);
    promessa.catch(erro);
    function erro(){
        alert("Ocorreu um erro no envio, tente novamente");
    }

}

function saiudasala(){
    alert("Você saiu da sala");
    userobj = {};
    clearInterval(checagem);
    let msgsaida = {
        from: (userobj.name),
        to: "Todos",
        text: "sai da sala...",
        type: "status",
        time: currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds(),
    };
    const promessapostagem = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", msgsaida);
}

function mensagemdeentrada(){
    //usuario atual entrou na sala
    var currentdate = new Date();
    let entrou = {
        from: (userobj.name),
        to: "Todos",
        text: "entra na sala...",
        type: "status",
        time: currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds(),
    }
    const promessa2 = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", entrou);
    promessa2.catch(console.log("Error"));
}

const recarregarmensagens = setInterval(prepararmensagens, 3000)