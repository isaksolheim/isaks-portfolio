import React from 'react';

function About() {
  return(
    <section className="about">
      <h1>Isak Solheim</h1>
      <h4>Front-end Developer</h4>
      <p>
        Hi. My name is Isak, and I am a developer from Norway.
      </p>
      <p>
        I wrote my first line of code in 2013, and I've more recently found a love for front-end development. I love learning about new technologies, and improving as a developer.
      </p>
      <p>
        I started out programming in python. Since then, I have specialized in JavaScript, HTML and CSS as a front-end developer.
      </p>
      <img id="corner" src={'./images/shape1.svg'} alt="shape" />
    </section>
  );
}

export default About;