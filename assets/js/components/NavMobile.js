export const NavMobile = () => {

  const lists = ['Home', 'Collection', 'About', 'Contact']

  const element =`
    <nav class="navMobile">
      <ul class="navMobile-list">
        ${
          lists.map((list) => {
            return(`
              <li class="navMobile-item">
                <a class="navMobile-link" href="">
                  ${list}
                </a>
              </li>
            `)
          }).join('')
        }
      </ul>
    </nav>
  `;

   
  return element;
}

export default NavMobile
