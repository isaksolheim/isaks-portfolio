import React from 'react';
import './styles/main.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
