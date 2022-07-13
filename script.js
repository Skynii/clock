//*Puxar a data e hora local******/
const data = new Date();

let daySpan = document.querySelector(".day");
let dayNumber = document.querySelector(".dayNumber");
let monthSpan = document.querySelector(".month");
let year = document.querySelector(".year");

let hour= document.querySelector(".hour");
let minutes= document.querySelector(".minutes");
let seconds= document.querySelector(".seconds");

/**Converter numeros para String */
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const days =["Domingo", "Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira","Sexta-Feira", "Sábado"]

let month = months[data.getMonth()];

let day = days[data.getDay()];

daySpan.innerHTML = day;
dayNumber.innerHTML = data.getDate();
monthSpan.innerHTML = month;
year.innerHTML = data.getFullYear();

hour.innerHTML = data.getHours();
minutes.innerHTML = data.getMinutes();
seconds.innerHTML = data.getSeconds();









//*Formatar a data;*******/

//*Data continuar a rodar automaticamente*****/

//*Trocar o fundo assimm quem a hora mudar */