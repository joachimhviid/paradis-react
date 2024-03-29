import React from 'react';
import {Link} from "react-router-dom";
import './Toolbar.css';

//images
import Logo from '../../assets/paradis.svg';
import Cup from '../../assets/paradis-kop.svg';
import Shop from '../../assets/paradis-butik.svg';
import Bell from '../../assets/paradis-klokke.svg';
import Info from '../../assets/paradis-info.svg';
import Cart from '../../assets/paradis-vogn.svg';

const toolbar = () => (
        <div className="menu not-mobile">
            <div className="menu-wrapper">
                <ul className="menu-item-list">
                    <li className="menu-item">
                        <Link to="/">
                            <img src={Logo} alt="Paradis isvaffel logo" className="logo"/>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/produkter">
                            <img src={Cup} alt="Isbæger" id="menu-cup"/> 
                            <p>Produkter</p>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/find-butik">
                            <img src={Shop} alt="Paradis butik" id="menu-shop"/>
                            <p>Find butik</p>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/catering">
                            <img src={Bell} alt="Paradis klokke" id="menu-bell"/>
                            <p>Catering</p>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/bestilling">
                            <img src={Cart} alt="Paradis vogn" id="menu-cart"/>
                            <p>Bestilling</p>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/om-paradis">
                            <img src={Info} alt="Paradis info" id="menu-info"/>
                            <p>Om paradis</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
);

export default toolbar;