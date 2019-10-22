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
        <div className="container-full cream">
          <div className="row">
            <div className="col-xs-6 welcome-box">
              <h1 className="heading">VELKOMMEN TIL PARADIS</h1>
              <p>Elsker du også is? Så er du kommet til det rette sted. Hos Paradis lever og ånder vi nemlig for at give dig en fantastisk is-oplevelse. Vi er din lokale ismand – for selvom du ser navnet Paradis mange steder i Danmark, så er vi en samling is-passionerede mennesker der selvstændigt har hver vores lokale Paradis butik.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
