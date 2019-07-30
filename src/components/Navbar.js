import React from 'react';

function Navbar() {
  return(
    <nav>
      <ul className="left">
        <li>isaks.io</li>
      </ul>
      <ul className="center">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
      <ul className="right">
        <li>Github</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
}

export default Navbar;