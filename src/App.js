import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/main.css';

// Components
import Toolbar from './components/Toolbar/Toolbar';

// Images
import HeroImg from './assets/paradis-hero.jpg';
import EcoBanner from './assets/økologi-banner.jpg';
import InstagramScribble from './assets/instagram-scribble.svg';
import FacebookScribble from './assets/facebook-scribble.svg';
import FrontIngredient from './assets/ingredienser.jpg';
import IsDisk from './assets/isdiske.png';
import Insta1 from './assets/insta1.jpg';
import Insta2 from './assets/insta2.jpg';
import Insta3 from './assets/insta3.jpg';

function App() {
  return (
    <div>
      <Router>
        <Toolbar />
      </Router>
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
        <div className="container-full" style={{marginTop: '100px'}}>
          <div className="row text-row">
            <div className="col-xs-5">
              <img src={FrontIngredient} alt="ingredients for ice cream" className="ingredient-banner"/>
            </div>
            <div className="col-xs-7 text-area merged">
              <h1 className="heading">VI ANVENDER KUN NØJE UDVALGTE RÅVARER</h1>
              <p>Kun det bedste er godt nok til Paradis is. Derfor rejser vi langt og gør os umage for at finde de bedste råvarer til vores is. <br/><br/></p>
              <p>Vores is er frisklavet. Derfor står vores passionrede ismestre tidligt op hver morgen for at lave friskrørt is til dig.<br/><br/></p>
              <p>Vi bruger udelukkende frisk frugt til vores frugt-is. Vi handler vores frugt lokalt for at den er så frisk og fuld af smag som muligt.<br/><br/></p>
              <p>Vores mere eksotiske råvarer bliver udvalgt med stor omhu fra hele verden: Kakao fra Den Dominikanske Republik, Bourbon vanilje fra Madagaskar, italiensk lakridspulver og italienske pistacie og hasselnødder. Ens for alle vores råvarer er deres fantastiske smag.<br/><br/></p>
              <p>En stor del af vores råvarer er økologiske. Vores havredrik, mælk, fløde og rørsukker er økologisk og vores kakao og hvide chokolade er både Fair Trade og økologisk certificeret.<br/><br/></p>
              <p>Hos Paradis har vi is til enhver smag! Du kan vælge mellem mælke is og vi har også veganske varianter – både sorbeter eller is lavet på økologisk havredrik.<br/><br/></p>
              <p>Velbekomme!</p>
            </div>
          </div>
        </div>
        <div className="container-full" style={{marginTop: '300px'}}>
          <div className="row">
            <div className="col-xs-12">
              <div className="catering-wrapper flex-center">
                <img src={IsDisk} alt="Paradis isdiske catering" className="isdisk"/>
              </div>
            </div>
          </div>
          <div className="row text-row">
            <div className="col-xs-12">
              <div className="flex-center flex-col text-area">
                <h1 className="heading">CATERING</h1>
                <p>Uanset om det er en fødselsdag, et bryllup, en konfirmation eller et firma arrangement, <br/> så vil dine gæster blive begejstret over is fra Paradis.</p>
                <a href="#" className="mainbutton mainbutton-red" style={{marginTop: '1em'}}>FIND CATERING</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="row">
            <div className="some-post-row">
              <div className="some-post">
                  <img src={Insta1} alt="Instagram post image1"/>
                </div>
                <div className="some-post center-post">
                  <img src={Insta2} alt="Instagram post image2"/>
                </div>
                <div className="some-post">
                  <img src={Insta3} alt="Instagram post image3"/>
                </div>
            </div>
          </div>
        </div>
        <footer className="container-full">
          <div className="col-xs-4">
            <h4>PRODUKTER</h4>
            <ul>
              <li>Isvarianter</li>
              <li>Isdesserter</li>
              <li>Isbokse</li>
              <li>Is i bæger og vaffel</li>
              <li>Shakes og Frappe</li>
              <li>Varme drikke</li>
              <li>Plantebaserede is</li>
              <li>Allergi</li>
            </ul>
          </div>
          <div className="col-xs-4">
            <h4>OM PARADIS</h4>
              <ul>
                <li>Hvem er vi</li>
                <li>Gavekort</li>
                <li>Kontakt os</li>
                <li>Presse</li>
                <li>Din egen Paradis?</li>
                <li>Job i Paradis</li>
              </ul>
          </div>
          <div className="col-xs-4">
            <h4>PARADIS DANMARK A/S</h4>
              <ul>
                <li>Vesterbrogade 4A 1. <br/>1620 København V</li>
                <li><span>Telefon</span> 35 35 79 02</li>
                <li><span>Telefontid</span> kl. 8.00 - 16.00 (man-fre)</li>
                <li><span>Email</span> info@paradis-is.dk</li>
                <li><span>CVR-nr.</span> 30 50 05 04</li>
                <li>Se åbningstider</li>
              </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
