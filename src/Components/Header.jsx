import logo from '../assets/my-logo.png';
import React from 'react'

function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="My business logo" className='logo' />
        <span>My Travel Journal</span>
    </header>
  )
}

export default Header
