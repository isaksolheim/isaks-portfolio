import React from 'react';

function Projects() {
  return(
    <section className="projects">
      <h1>Projects</h1>
      <div className="project">
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
            <div className="button"><a href="https://tromsopizzeria.no/">View Site</a></div>
            <div className="button"><a href="https://github.com/wickdeeb/materialize-resturant">Github</a></div>
          </div>
        </div>
      </div>
      <div className="project">
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
            <div className="button"><a href="https://www.wickdeeb.com/">View Site</a></div>
            <div className="button"><a href="https://github.com/wickdeeb/wickdeeb">Github</a></div>
          </div>
        </div>
      </div>
      <div className="project">
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
            <div className="button"><a href="https://www.100briller.xyz/">View Site</a></div>
            <div className="button"><a href="https://github.com/wickdeeb/100briller">Github</a></div>
          </div>
        </div>
      </div>
      <div className="project">
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
            <div className="button"><a href="https://wickdeeb.github.io/burgr/">View Site</a></div>
            <div className="button"><a href="https://github.com/wickdeeb/burgr">Github</a></div>
          </div>
        </div>
      </div>
      <div className="project">
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
            <div className="button"><a href="https://www.adidasteam.xyz">View Site</a></div>
            <div className="button"><a href="https://github.com/wickdeeb/adidas-skateboarding">Github</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;