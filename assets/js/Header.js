import { Btn } from "./components/Btn.js";
import Nav from "./components/Nav.js";

const imgHamburger = "./assets/img/menu.svg";
const relHamburger = "btn de apertura  barra de navegación mobile";

const imgCross = "./assets/img/close.svg";
const relCross = "btn de cerrar  barra de navegación mobile";

export const Header = () => {
  const tagBtn = Btn(imgHamburger,relHamburger);
  tagBtn.id = 'btn-open'; // Agrega un identificador único al primer botón

  const tagBtn2 = Btn(imgCross, relCross);
  tagBtn2.id = 'btn-close'; // Agrega un identificador único al segundo botón

  const Header = document.createElement('header');
  Header.classList.add('header');

  const headerBtn = document.createElement('button');
  headerBtn.classList.add('header-btn');
  headerBtn.textContent = 'This Interior';

  const tempContainerNav = document.createRange().createContextualFragment(Nav());

  Header.appendChild(headerBtn);
  Header.appendChild(tempContainerNav);
  Header.appendChild(tagBtn);
  Header.appendChild(tagBtn2);

    
  return Header;
};
