import { Btn } from "./Btn.js";
import { Nav } from "./nav.js";


export const Header = () => {

  const listener = () => {
    const tag =  document.querySelector('.header-nav');
    tag.classList.toggle('appearBar')
    console.log(tag);
  };

  const tagBtn = Btn();
  tagBtn.addEventListener('click', listener);

  const Header = document.createElement('header');
  Header.classList.add('header');

  const headerBtn = document.createElement('button');
  headerBtn.classList.add('header-btn');
  headerBtn.textContent = 'This Interior';

  const con = document.createRange().createContextualFragment(Nav())

  Header.appendChild(headerBtn);
  Header.appendChild(con);
  Header.appendChild(tagBtn);

  return Header;
};


