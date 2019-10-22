import React from 'react';
import './css/main.css';
import Toolbar from './components/Toolbar/Toolbar';
import HeroImg from './assets/paradis-hero.jpg';

function App() {
  return (
    <div>
      <Toolbar />
      <div className="site-content">
        <div className="hero-img">
          <img src={HeroImg} alt="Paradis pige billede"/>
        </div>
        <div className="container">
          <div className="row">
            <h1>Paradis</h1>
            <p>Det bedste placeholder content du nogensinde har set</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
