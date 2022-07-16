//*Puxar a data e hora local******/
setInterval(formatHours, 1000);
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

document.querySelector(".date").innerHTML = `${day}, ${dayNumber} de ${month} de ${year} `
}


//*Data continuar a rodar automaticamente, com metodo proprio*****/
function formatHours(){
   const data = new Date();
   document.querySelector(".time").innerHTML = data.toLocaleTimeString()
}; 

formatData();




