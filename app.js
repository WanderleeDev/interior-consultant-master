import { addBlock } from "./assets/js/utils/addBlock.js";
import { Header } from "./assets/js/Header.js";
import { Main } from "./assets/js/Main.js";
import { Footer } from "./assets/js/Footer.js";

//header agregado
const body = document.querySelector(".page"); 
body.insertAdjacentElement('afterbegin' , Header());
//main agregado
addBlock('#app', Main());
//footer agregado
addBlock('#app', Footer(),'afterend');

const btnMobile = document.querySelector('.btbMobile');

btnMobile.addEventListener('click', () => {
  const elementTarget = document.querySelector('.navMobile');
  console.log(elementTarget);
  elementTarget.classList.toggle('appearBar');
})

//element = elementos HTML 
//HTML = cadenas de texto a formato html