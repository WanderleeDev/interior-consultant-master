import  NavMobile  from "./components/NavMobile.js";
import  Card  from "./components/Card.js";

export const Main = () => {

  const main = `
  ${NavMobile()}
  <section class="sectionMAin">
    <h1 class="sectionMain-title">
      Modern interior
    </h1>
    <div class="sectionMain-description">
      A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.
    </div>
    <button class="sectionMain-btn">Read more <span>→<span/></button>
  </section>
  <img class="section-img" loading="lazy" src="assets/img/photo1.png" alt="imagen de portada">
  ${Card()}
  `;

     
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = main;

  return tempContainer.innerHTML
}
