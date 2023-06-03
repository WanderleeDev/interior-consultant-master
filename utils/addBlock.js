//Recibe contenido, un selector y una posición para insertar bloques de código HTML
export function addBlock(target, content,position = 'afterbegin') {
  const containerTarget = document.querySelector(target);

  switch (position) {
    case 'afterbegin':
    case 'beforebegin':
    case 'afterend':
    case 'beforeend':
      
      containerTarget.insertAdjacentHTML(position, content)
      break;
  
    default:
      console.error('posiciones validas: afterbegin, beforebegin, afterend, beforeend');
      break;
  }
}