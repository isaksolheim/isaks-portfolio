import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScrollHeight: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ currentScrollHeight: window.scrollY });
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
    
    if (this.state.currentScrollHeight > 200) {
      colorStyle = {
        color: '#333',
        backgroundColor: '#ffffff'
      }
    } else {
      colorStyle = {}
    }

    return(
      <nav id="navbar" style={colorStyle}>
        <ul className="left">
          <li>isaks.io</li>
        </ul>
        <ul className="right">
          <li><i id="toggleIcon" onClick={this.handleToggle} className="fas fa-bars"></i></li>
        </ul>
        <ul className="links">
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/">Skills</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;