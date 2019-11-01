import React from 'react';
import './css/main.css';
import Toolbar from './components/Toolbar/Toolbar';
import HeroImg from './assets/paradis-hero.jpg';
import EcoBanner from './assets/økologi-banner.jpg';
import InstagramScribble from './assets/instagram-scribble.svg';
import FacebookScribble from './assets/facebook-scribble.svg';

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
            <div className="col-xs-6">
              <div className="button-wrapper">
                <a href="#" className="mainbutton mainbutton-red">Find Butik</a>
                <a href="#" className="mainbutton mainbutton-blue">Find Produkter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-full" style={{marginTop: '200px'}}>
          <div className="row flex-center">
              <div className="col-xs-6">
                <div className="some-button-wrapper">
                  <h3 className="follow-us">FØLG OS PÅ:</h3>
                  <div className="some-icons">
                  <a href="#">
                    <img src={InstagramScribble} alt="instagram stylized icon"/>
                  </a>
                  <a href="#">
                    <img src={FacebookScribble} alt="facebook stylized icon"/>
                  </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-6">
                <a href="#">
                  <img src={EcoBanner} alt="Økologi fløde rørsukker" className="about-banner"/>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
