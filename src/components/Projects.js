import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWidth: window.innerWidth,
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      currentWidth: window.innerWidth
    });
  }

  handleClick = (e) => {
    if (window.innerWidth < 800) {
      if (e.currentTarget.children[0].className === '') {
        e.currentTarget.children[0].className += ' dark';
        e.currentTarget.children[1].className += ' visible';
      } else {
        e.currentTarget.children[0].className = '';
        e.currentTarget.children[1].className = 'hidden';
      }
    }
  }

  render() {
    return(
      <div className="projects-wrapper">
        <section className="projects">
          <h1>Projects</h1>
          <div className="project" onClick={this.handleClick}>
            <img src={'./images/projects/tromsopizzeria.jpg'} alt="tromsopizzeria" />
            <div className="hidden">
              <h3>PIZZA RESTURANT</h3>
              <p className="light">Type: Freelance</p>
              <ul className="technologies">
                <li>React</li>
                <li>React-Scroll</li>
                <li>Materialize CSS</li>
                <li>Firebase</li>
              </ul>
              <div className="buttons">
                <a href="https://tromsopizzeria.no/"><div className="button">View Site</div></a>
                <a href="https://github.com/wickdeeb/100briller"><div className="button">Github</div></a>
              </div>
            </div>
          </div>
          <div className="project" onClick={this.handleClick}>
            <img src={'./images/projects/wickdeeb.jpg'} alt="wickdeeb" />
            <div className="hidden">
              <h3>PROGRAMMING BLOG</h3>
              <p className="light">Type: Personal</p>
              <ul className="technologies">
                <li>React</li>
                <li>React-Router</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Firebase</li>
              </ul>
              <div className="buttons">
                <a href="https://www.wickdeeb.com/"><div className="button">View Site</div></a>
                <a href="https://github.com/wickdeeb/100briller"><div className="button">Github</div></a>
              </div>
            </div>
          </div>
          <div className="project" onClick={this.handleClick}>
            <img src={'./images/projects/100briller.jpg'} alt="100briller" />
            <div className="hidden">
              <h3>ECOMMERCE WEBSITE</h3>
              <p className="light">Type: Personal</p>
              <ul className="technologies">
                <li>React</li>
                <li>React-Router</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>Firebase</li>
              </ul>
              <div className="buttons">
                <a href="https://www.100briller.xyz/"><div className="button">View Site</div></a>
                <a href="https://github.com/wickdeeb/100briller"><div className="button">Github</div></a>
              </div>
            </div>
          </div>
          <div className="project" onClick={this.handleClick}>
            <img src={'./images/projects/burgr.jpg'} alt="burgr" />
            <div className="hidden">
              <h3>BURGER RESTURANT</h3>
              <p className="light">Type: Personal</p>
              <ul className="technologies">
                <li>React</li>
                <li>NES.css</li>
                <li>Sass</li>
                <li>Firebase</li>
              </ul>
              <div className="buttons">
                <a href="https://wickdeeb.github.io/burgr/"><div className="button">View Site</div></a>
                <a href="https://github.com/wickdeeb/100briller"><div className="button">Github</div></a>
              </div>
            </div>
          </div>
          <div className="project" onClick={this.handleClick}>
            <img src={'./images/projects/adidasteam.jpg'} alt="adidasteam" />
            <div className="hidden">
              <h3>INFO WEBSITE</h3>
              <p className="light">Type: Personal</p>
              <ul className="technologies">
                <li>React</li>
                <li>Animate.css</li>
                <li>Fullpage.js</li>
                <li>Sass</li>
                <li>Firebase</li>
              </ul>
              <div className="buttons">
                <a href="https://www.adidasteam.xyz"><div className="button">View Site</div></a>
                <a href="https://github.com/wickdeeb/100briller"><div className="button">Github</div></a>
              </div>
            </div>
          </div>
          <a href="https://github.com/wickdeeb">
            <div className="project" onClick={this.handleClick}>
              <img src={'./images/projects/github.jpg'} alt="github" />
              <div className="hidden">
                <h3 id="center">MY GITHUB</h3>
              </div>
            </div>
          </a>
        </section>
      </div>
    );
  }
}

export default Projects;