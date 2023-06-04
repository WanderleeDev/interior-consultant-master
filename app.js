import { addBlock } from "./assets/js/utils/addBlock.js";
import { Header } from "./assets/js/components/Header.js";

const body = document.querySelector(".page");
body.insertBefore(Header(), body.firstChild);