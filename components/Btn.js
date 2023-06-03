export const Btn = () => {
  const tagBtn = document.createElement('button');

  tagBtn.setAttribute('aria-label', 'mostrar o ocultar menu mobile');
  tagBtn.classList.add('btbMobile');
  tagBtn.textContent = '☲';

  return tagBtn;
}