export const Nav = () => {

  const lists = ['Home', 'Collection', 'About', 'Contact']

  const element =`
    <nav class="header-nav">
      <ul class="navbar">
        ${
          lists.map((list) => {
            return(`
              <li class="navbar-item">
                <a class="navbar-link" href="">
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

