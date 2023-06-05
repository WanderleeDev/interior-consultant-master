import { addBlock } from "./assets/js/utils/addBlock.js";
import { Header } from "./assets/js/Header.js";
import { Main } from "./assets/js/Main.js";

const body = document.querySelector(".page");
body.insertBefore(Header(), body.firstChild);

console.log(Main());
//body.innerHTML = Main()
addBlock('#app', Main());