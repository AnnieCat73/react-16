import React from 'react';

import reactLogo from '../images/reactLogo.png';

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={reactLogo} alt="Logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

      </nav>
      <h1>Reasons I'm excited to learn React</h1>
    </header>
  )
}

export default Header