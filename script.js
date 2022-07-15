//*Puxar a data e hora local******/
const data = new Date();

//**Converter numeros para String */
//*Formatar a data;*******/
function formatData(){
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const days =["Domingo", "Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira","Sexta-Feira", "Sábado"]

let month = months[data.getMonth()];
let day = days[data.getDay()];
let dayNumber= data.getDate();
let year = data.getFullYear();

let date = document.querySelector(".date");

date.innerHTML = `${day}, ${dayNumber} de ${month} de ${year} `
}



setInterval(formatHours, 1000);

function formatHours(){

let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds(); 

let getTime= document.querySelector(".time");

if(hour<10)  hour = "0"+hour;
if(minutes<10) minutes = "0" +minutes;
if(seconds<10) seconds = "0" +seconds;

getTime.innerHTML = `${hour}:${minutes}:${seconds}`
}; 


//*Data continuar a rodar automaticamente*****/


//*Trocar o fundo assimm quem a hora mudar */

formatData();


