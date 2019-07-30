import React from 'react';

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
      <nav style={colorStyle}>
        <ul className="left">
          <li>isaks.io</li>
        </ul>
        <ul className="right">
          <li><i className="fas fa-bars"></i></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;