import React from 'react';

function Navbar() {
  return(
    <nav>
      <ul className="left">
        <li>isaks.io</li>
      </ul>
      <ul className="right">
        <li><i className="fas fa-bars"></i></li>
      </ul>
    </nav>
  );
}

export default Navbar;