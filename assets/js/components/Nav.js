const Nav = () => {

  const lists = ['Home', 'Collection', 'About', 'Contact']

  const element =`
    <nav class="navbar">
      <ul class="navbar-list">
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

export default Nav

