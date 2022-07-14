//*Puxar a data e hora local******/
const data = new Date();
let daySpan = document.querySelector(".day");
let dayNumber = document.querySelector(".dayNumber");
let monthSpan = document.querySelector(".month");
let year = document.querySelector(".year");

let hourSpan= document.querySelector(".hour");
let minutesSpan= document.querySelector(".minutes");
let secondsSpan= document.querySelector(".seconds");

/**Converter numeros para String */
function formatData(){
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const days =["Domingo", "Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira","Sexta-Feira", "Sábado"]

let month = months[data.getMonth()];

let day = days[data.getDay()];

daySpan.innerHTML = day;
dayNumber.innerHTML = data.getDate();
monthSpan.innerHTML = month;
year.innerHTML = data.getFullYear();
}

//*Formatar a data;*******/
function formatHours(){

let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds(); 

if(hour<10)  hour = "0"+hour;
if(minutes<10) minutes = "0" +minutes;
if(seconds<10) seconds = "0" +minutes;

hourSpan.innerHTML = hour
minutesSpan.innerHTML = minutes
secondsSpan.innerHTML = seconds
}


//*Data continuar a rodar automaticamente*****/
function time(hour, minutes, seconds){
   let hours = hour+":" +minutes+":" +seconds;

}


//*Trocar o fundo assimm quem a hora mudar */

formatData();
formatHours();