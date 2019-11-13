import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/main.css';

// Components
import Toolbar from './components/Toolbar/Toolbar';
import FrontPage from './pages/FrontPage';
import DinParadisPage from './pages/DinParadisPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div>
    <div className="site-content">
      <Router>
        <Toolbar />
        <Switch>
          <Route exact path="/produkter">
            <h2>Produkter</h2>
          </Route>
          <Route exact path="/find-butik">
            <h2>Find butik</h2>
          </Route>
          <Route exact path="/catering">
            <h2>Catering is here</h2>
          </Route>
          <Route exact path="/bestilling">
            <DinParadisPage />
          </Route>
          <Route exact path="/om-paradis">
            <h2>Om paradis</h2>
          </Route>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
      
      
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
