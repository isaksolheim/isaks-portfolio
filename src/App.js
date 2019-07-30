import React from 'react';
import './styles/main.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
