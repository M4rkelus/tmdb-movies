import React from 'react';

import './Header.styles.css';

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='/'>Home</a>
          </li>
          {/* <li className='nav-item'>
            <a href='#'>Movies</a>
          </li>
          <li className='nav-item'>
            <a href='#'>TV Shows</a>
          </li>
          <li className='nav-item'>
            <a href='#'>People</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
