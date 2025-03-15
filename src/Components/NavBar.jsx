import logo from '../assets/my-logo.png';
import React from 'react';

function NavBar() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <img src={logo} alt="My business logo" className='logo' />
        <span>React Progress</span>
      </nav>
    </header>
  );
}

export default NavBar;

