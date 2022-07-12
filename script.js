//*Puxar a data e hora local******/
const data = new Date();

let day = document.querySelector(".day");
let dayNumber = document.querySelector(".dayNumber");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

let hour= document.querySelector(".hour");
let minutes= document.querySelector(".minutes");
let seconds= document.querySelector(".seconds");

day.innerHTML = data.getDay();
dayNumber.innerHTML = data.getDate();
month.innerHTML = (data.getMonth().toString());
year.innerHTML = data.getFullYear();

hour.innerHTML = data.getHours();
minutes.innerHTML = data.getMinutes();
seconds.innerHTML = data.getSeconds();

/**Converter numeros para String */







//*Formatar a data;*******/

//*Data continuar a rodar automaticamente*****/

//*Trocar o fundo assimm quem a hora mudar */