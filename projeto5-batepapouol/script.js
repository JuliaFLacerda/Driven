const inputname = document.querySelector('.inputentre');
const namebutton = document.querySelector('.botaoentre');
const loginscreen = document.querySelector('.loginscreencontainer');
namebutton.addEventListener('click', enviarnome);
let userobj = {};
let recarregarmensagens = null;
let checagem = null;

function enviarnome(){
    let name = inputname.value;
    userobj = {name,};
    const promessa1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", userobj)
    promessa1.catch(erronaentrada);
    loginscreen.classList.add("hidden");
    checagem = setInterval(aindaonline, 5000, userobj);
    prepararmensagens();
    recarregarmensagens = setInterval(prepararmensagens, 3000);


}


function prepararmensagens(){
//busca mensagens e coloca elas na tela;
    const body = document.querySelector('body');
    let main = document.querySelector('main');
    let lastmessage = document.querySelector('.last');
    const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promessa.then(mensagensnatela);
    promessa.catch("Ocorreu um erro, recarregue a página")
    function mensagensnatela(resposta){
    let mensagens = resposta.data;
    if(lastmessage != null){
        let novamensagem = mensagens[mensagens.length -1];
        if(novamensagem.type === "status"){
            let newmsg = document.createElement('div');
        newmsg.classList.add("" + novamensagem.type);
        main.appendChild(newmsg);
        let horario = document.createElement('div');
        horario.classList.add("horario");
        horario.textContent = novamensagem.time;
        newmsg.appendChild(horario);
        let user = document.createElement('div');
        user.classList.add("username");
        user.textContent = novamensagem.from;
        newmsg.appendChild(user);
        let anuncio = document.createElement('div');
        anuncio.classList.add("anuncio");
        anuncio.textContent = novamensagem.text;
        newmsg.appendChild(anuncio);
        }
        else if(novamensagem.type === "message"){
            let newmsg = document.createElement('div');
                newmsg.classList.add("" + novamensagem.type);
                main.appendChild(newmsg);
                let horario = document.createElement('div');
                horario.classList.add("horario");
                horario.textContent = novamensagem.time;
                newmsg.appendChild(horario);
                let user = document.createElement('div');
                user.classList.add("username");
                user.textContent = novamensagem.from;
                newmsg.appendChild(user);
                let anuncio = document.createElement('div');
                anuncio.classList.add("anuncio");
                anuncio.textContent = "para";
                newmsg.appendChild(anuncio);
                let to = document.createElement('div');
                to.classList.add("anuncio");
                to.textContent = novamensagem.to + ": ";
                newmsg.appendChild(to);
                let conteudo = document.createElement('div');
                conteudo.classList.add("username");
                conteudo.textContent = novamensagem.text;
                newmsg.appendChild(conteudo);
        };

    }
    else{
        for(let i = 0; i < mensagens.length;i++){
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
    }
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
    };
}

function aindaonline(user){
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", user);
    //alert
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
    mensagemaenviar.value = "Escreva aqui...";
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", obj);
    promessa.then(prepararmensagens);
    promessa.catch(erro);
    function erro(){
        window.location.reload();
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

function enviarcomenter(e){
    if(e.keyCode === 13){
        enviarmensagem();
    }
    else{}
}

mensagemaenviar.addEventListener('keydown', enviarcomenter);