const inputname = document.querySelector('.inputentre');
const namebutton = document.querySelector('.botaoentre');
const loginscreen = document.querySelector('.loginscreencontainer');
namebutton.addEventListener('click', enviarnome);
let userobj = {};
let recarregarmensagens = null;
let checagem = null;
let lastmessage = null;
let lastparticipante = null;
let selectedparticipante = "Todos";
let selectedvisual = "Público";

function participantes(){
    const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
    promessa.then(atualizarparticipantes);
}

const participanteschecar = setInterval(participantes, 10000);

function atualizarparticipantes(resposta){
    let participantes = resposta.data;
    let container = document.querySelector('.contactscreencontainer');
    const contactscreen = document.querySelector('.contactscreen');
    const visual = document.querySelector('.visual');
    contactscreen.removeChild(container);
    container = document.createElement('div');
    container.classList.add("contactscreencontainer");
    contactscreen.insertBefore(container, visual);
    let todostext = document.createElement('div');
    todostext.classList.add("contacttext");
    todostext.textContent = "Todos";
    let todosion = document.createElement('ion-icon');
    todosion.name = "people-sharp";
    let todosiconenome = document.createElement('div');
    todosiconenome.classList.add("iconenome");
    todosiconenome.appendChild(todosion);
    todosiconenome.appendChild(todostext);
    let todoscontato = document.createElement('div');
    todoscontato.classList.add("contato");
    todoscontato.classList.add("selectedcontact");
    todoscontato.appendChild(todosiconenome);
    container.appendChild(todoscontato);
    container = document.querySelector('.contactscreencontainer');
    for(let i = 0; i < participantes.length; i++){
        let newcontactname = document.createElement("div");
        newcontactname.textContent = participantes[i].name;
        newcontactname.classList.add("contacttext");
        let newion = document.createElement("ion-icon");
        newion.name ="person-circle";
        let newiconenome = document.createElement("div");
        newiconenome.classList.add("iconenome");
        newiconenome.appendChild(newion);
        newiconenome.appendChild(newcontactname);
        let newcontato = document.createElement("div");
        newcontato.classList.add("contato");
        newcontato.appendChild(newiconenome);
        let check = document.createElement("ion-icon");
        check.name="checkmark-sharp";
        check.classList.add("hidden");
        newcontato.appendChild(check);
        container.appendChild(newcontato);
    };
    const contatos = document.querySelectorAll('.contato');
    for(const i of contatos){
        i.addEventListener('click', selecionarcontato);
    };
}



function enviarnome(){
    let name = inputname.value;
    userobj = {name,};
    const promessa1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", userobj);
    promessa1.then(prepararmensagens);
    promessa1.catch(erronaentrada);
    checagem = setInterval(aindaonline, 5000, userobj);
    recarregarmensagens = setInterval(prepararmensagens, 3000);
    let paraquem = document.querySelector(".paraquem");
    paraquem.textContent = userobj.name + " para " + selectedparticipante + " (" + selectedvisual + ") ";
    loginscreen.classList.add("hidden");
}


function prepararmensagens(){
//busca mensagens e coloca elas na tela;
    let main = document.querySelector('main');
    const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promessa.then(mensagensnatela);
    promessa.catch("Ocorreu um erro, recarregue a página")
function mensagensnatela(resposta){
    let mensagens = resposta.data;
    let tempvar = mensagens[mensagens.length - 1];
    let counter = JSON.stringify(tempvar) === JSON.stringify(lastmessage);
    if(lastmessage != null && counter === false){
        let novamensagem = mensagens[mensagens.length -1];
        lastmessage = novamensagem;
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
            newmsg.scrollIntoView();
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
                
                newmsg.scrollIntoView();
        }
        else if(novamensagem.type === "private_message" && (novamensagem.to === userobj.name || novamensagem.from === userobj.name)){
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
                newmsg.scrollIntoView();
        }

    }
    else if(counter === true){
        let x = 1;
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
            else if(mensagens[i].type === "private_message" && (mensagens[i].to === userobj.name || mensagens[i].from === userobj.name)){
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
        lastmessage = mensagens[mensagens.length - 1];     
    }
}
};

function erronaentrada(erro){
    if(erro.response.status === 400){
        alert("Usuário já utilizado");
        window.location.reload();
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
    let obj = {};
    if(selectedvisual === "Público"){
        obj = {
            from: (userobj.name),
            to: selectedparticipante,
            text: mensagemaenviar.value,
            type: "message",
        }
    }
    else if(selectedvisual === "Reservadamente"){
        obj = {
            from: (userobj.name),
            to: selectedparticipante,
            text: mensagemaenviar.value,
            type: "private_message",
        }
    }
    mensagemaenviar.value = "Escreva aqui...";
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", obj);
    promessa.then(prepararmensagens);
    promessa.catch(erro);
    function erro(){
        alert("Ocorreu um erro")
        window.location.reload();
    }

}

function saiudasala(){
    alert("Você saiu da sala")
}

function enviarcomenter(e){
    if(e.keyCode === 13){
        enviarmensagem();
    }
    else{}
}

mensagemaenviar.addEventListener('keydown', enviarcomenter);

function selecionarcontato(e){
    let selected = document.querySelector('.selectedcontact');
        selected.classList.remove("selectedcontact");
        this.classList.add("selectedcontact");
        let selected2 = this.children[0].children[1];
        selectedparticipante = selected2.textContent;
        let paraquem = document.querySelector('.paraquem');
        paraquem.textContent = userobj.name + " para " + selectedparticipante + " (" + selectedvisual + ") ";
}

function selecionarvisibilidade(e){
    let selected = document.querySelector('.selectedvisibility');
        selected.classList.remove("selectedvisibility");
        this.classList.add("selectedvisibility");
        let selected2 = this.children[0].children[1];
        selectedvisual = selected2.textContent;
        let paraquem = document.querySelector('.paraquem');
        paraquem.textContent = userobj.name + " para " + selectedparticipante + " (" + selectedvisual + ") ";
}

const visibilidades = document.querySelectorAll('.visibilidade');
for(let i of visibilidades){
    i.addEventListener('click', selecionarvisibilidade);
}


const contactscreenopener = document.querySelector(".contactscreenopener");
contactscreenopener.addEventListener('click', opencontactscreen);

function opencontactscreen(e){
    let fundopreto = document.querySelector('.fundopreto');
    let contactscreen = document.querySelector('.contactscreen');
    fundopreto.classList.remove("hidden");
    contactscreen.classList.remove("hidden");
    contactscreen.scrollIntoView();
}

function closecontactscreen(e){
    e.classList.add("hidden");
    let contactscreen = document.querySelector('.contactscreen');
    contactscreen.classList.add("hidden");
}