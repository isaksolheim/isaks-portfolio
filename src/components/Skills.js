import React from 'react';

function Skills() {
  return(
    <section className="skills">
      <h1>Skills</h1>
      <h2>Front-end</h2>
        <div className="skills-category">
          <div className="skills-card">
            <img src={'./images/javascript.png'} alt="javscript" />
            <p className="skills-card-text">JavaScript</p>
          </div>
          <div className="skills-card">
            <img src={'./images/react.png'} alt="react" />
            <p className="skills-card-text">React</p>
          </div>
          <div className="skills-card">
            <img src={'./images/redux.png'} alt="redux" />
            <p className="skills-card-text">Redux</p>
          </div>
          <div className="skills-card">
            <img src={'./images/html5.png'} alt="html5" />
            <p className="skills-card-text">HTML5</p>
          </div>
          <div className="skills-card">
            <img src={'./images/css3.png'} alt="css3" />
            <p className="skills-card-text">CSS3</p>
          </div>
          <div className="skills-card">
            <img src={'./images/sass.png'} alt="sass" />
            <p className="skills-card-text">Sass</p>
          </div>
          <div className="skills-card">
            <img src={'./images/bootstrap.png'} alt="bootstrap" />
            <p className="skills-card-text">Bootstrap</p>
          </div>
        </div>
        <h2>Back-end</h2>
        <div className="skills-category">
          <div className="skills-card">
            <img src={'./images/mongodb.png'} alt="mongodb" />
            <p className="skills-card-text">MongoDB</p>
          </div>
          <div className="skills-card">
            <img src={'./images/nodejs.png'} alt="node" />
            <p className="skills-card-text">Node</p>
          </div>
          <div className="skills-card">
            <img src={'./images/python.png'} alt="python" />
            <p className="skills-card-text">Python</p>
          </div>
          <div className="skills-card">
            <img src={'./images/firebase.png'} alt="firebase" />
            <p className="skills-card-text">Firebase</p>
          </div>
        </div>
        <h2>Other</h2>
        <div className="skills-category">
          <div className="skills-card">
            <img src={'./images/git.png'} alt="git" />
            <p className="skills-card-text">Git</p>
          </div>
          <div className="skills-card">
            <img src={'./images/adobexd.png'} alt="adobe xd" />
            <p className="skills-card-text">Adobe XD</p>
          </div>
          <div className="skills-card">
            <img src={'./images/photoshop.png'} alt="photoshop" />
            <p className="skills-card-text">Photoshop</p>
          </div>
          <div className="skills-card">
            <img src={'./images/linux.png'} alt="tux" />
            <p className="skills-card-text">Linux</p>
          </div>
          <div className="skills-card">
            <img src={'./images/jest.png'} alt="jest" />
            <p className="skills-card-text">Jest</p>
          </div>
        </div>
    </section>
  );
}

export default Skills;