import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.styles.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='list'>
        <li>
          <NavLink className='nav-link' to='/movies'>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/actors'>
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
