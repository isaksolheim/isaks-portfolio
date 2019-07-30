import React from 'react';

class Header extends React.Component {
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
    if (window.scrollY < 204) {
      this.setState({ currentScrollHeight: window.scrollY });
    }
  }

  render() {
    const opacity = 1 - (this.state.currentScrollHeight / 130);
    let fadeStyle;
    if (opacity < 0) {
      fadeStyle = { color: 'rgba(85, 85, 85, 0)' }
    } else {
      fadeStyle = { color: `rgba(85, 85, 85, ${opacity})` };
    }
    return(
      <header style={fadeStyle}>
        <p>
          Hi, I'm Isak Solheim, a <b>front-end
          developer</b> focused on creating <b>beautiful</b> and
          <b> user friendly</b> applications while writing <b>clean code</b>.
        </p>
      </header>
    );
  }
}

export default Header;