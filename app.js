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

const btnMobile = document.querySelectorAll('.btbMobile');
console.log(btnMobile);

//Desplegar barra de navegación mobile
btnMobile.forEach(btn => {

  btn.addEventListener( 'click' ,() => {
    const btnOpen= document.querySelector('#btn-open');
    const btnClose= document.querySelector('#btn-close');

    // Alternar los valores de los atributos "id"
    const tempId = btnOpen.id;
    btnOpen.id = btnClose.id;
    btnClose.id = tempId;

    const elementTarget = document.querySelector('.navMobile');
    elementTarget.classList.toggle('appearBar');
  });
});

//element = elementos HTML 
//HTML = cadenas de texto a formato html