import React from 'react';
import './styles/main.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
