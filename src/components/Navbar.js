import React from 'react';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScrollHeight: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  handleScroll = () => {
    this.setState({ currentScrollHeight: window.scrollY });
  }

  handleResize = () => {
    var navbar = document.getElementById('navbar');
    var toggleIcon = document.getElementById('toggleIcon');
    if (window.innerWidth >= 800) {
      navbar.className = '';
      toggleIcon.className = 'fas fa-bars'
    }
  }

  handleToggle = () => {
    var navbar = document.getElementById('navbar');
    var toggleIcon = document.getElementById('toggleIcon');

    if (navbar.className === 'active') {
      navbar.className = '';
      toggleIcon.className = 'fas fa-bars'
    } else {
      navbar.className = 'active';
      toggleIcon.className = 'fas fa-times'
    }
  }

  render() {
    let colorStyle;
    let otherColorStyle;
    
    if (this.state.currentScrollHeight > 200) {
      colorStyle = {
        color: '#333',
        backgroundColor: '#ffffff'
      };
      otherColorStyle = {
        color: '#333',
      };
    } else {
      colorStyle = {};
      otherColorStyle = {};
    }

    return(
      <nav id="navbar" style={colorStyle}>
        <ul className="left">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-260}
            duration={600}><li style={otherColorStyle}>isaks.io</li>
          </Link>
        </ul>
        <ul className="right">
          <li><i id="toggleIcon" onClick={this.handleToggle} className="fas fa-bars"></i></li>
        </ul>
        <ul className="links">
          <Link 
            href="#projects-header"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-25}
            duration={600}
            onClick={() => { if (window.innerWidth <= 800) { this.handleToggle() }}}><li style={otherColorStyle}>Projects</li>
          </Link>
          <Link 
            href="#skills-header"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-25}
            duration={600}
            onClick={() => { if (window.innerWidth <= 800) { this.handleToggle() }}}><li style={otherColorStyle}>Skills</li>
          </Link>
          <Link
            href="#contact-header"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-25}
            duration={600}
            onClick={() => { if (window.innerWidth <= 800) { this.handleToggle() }}}><li style={otherColorStyle}>Contact</li>
          </Link>
          <a href={'IsakSolheimCV.pdf'} download onClick={() => { if (window.innerWidth <= 800) { this.handleToggle() }}}><li style={otherColorStyle}>Resume</li></a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;