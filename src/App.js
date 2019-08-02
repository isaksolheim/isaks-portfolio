import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={props =>
          <div>
            <Header />
            <Projects />
            <Skills />
            <Contact />
          </div>
          } />
          <Route exact path="/contact" render={Contact} />
          <Route path="/:slug" render={Project} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
