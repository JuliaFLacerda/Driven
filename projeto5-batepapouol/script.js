let name = prompt("Qual seu lindo nome?");

let obj = {name,}

const promessa1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants ", obj)
