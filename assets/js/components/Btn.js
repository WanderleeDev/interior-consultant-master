export const Btn = (urlImg, rel) => {
  const tagBtn = document.createElement('button');
  const img = document.createElement('img');
  img.classList.add('btnMobile-img');
  img.setAttribute('src', urlImg);
  img.setAttribute('rel', rel);

  tagBtn.setAttribute('aria-label', 'mostrar o ocultar menu mobile');
  tagBtn.classList.add('btbMobile');
  tagBtn.appendChild(img);

  
  return tagBtn;
}
