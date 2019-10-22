import React from 'react';
import './Toolbar.css';

//images
import Logo from '../../assets/paradis.svg';
import Cup from '../../assets/paradis-kop.svg';
import Shop from '../../assets/paradis-butik.svg';
import Bell from '../../assets/paradis-klokke.svg';
import Info from '../../assets/paradis-info.svg';
import Cart from '../../assets/paradis-vogn.svg';

const toolbar = props => (
    <div className="menu">
        <div className="menu-wrapper">
            <ul className="menu-item-list">
                <li className="menu-item">
                    <img src={Logo} alt="Paradis isvaffel logo" className="logo"/>
                </li>
                <li className="menu-item">
                    <img src={Cup} alt="Isbæger" id="menu-cup"/> 
                    <p>Produkter</p>
                </li>
                <li className="menu-item">
                    <img src={Shop} alt="Paradis butik" id="menu-shop"/>
                    <p>Find butik</p>
                </li>
                <li className="menu-item">
                    <img src={Bell} alt="Paradis klokke" id="menu-bell"/>
                    <p>Catering</p>
                </li>
                <li className="menu-item">
                    <img src={Cart} alt="Paradis vogn" id="menu-cart"/>
                    <p>Bestilling</p>
                </li>
                <li className="menu-item">
                    <img src={Info} alt="Paradis info" id="menu-info"/>
                    <p>Om paradis</p>
                </li>
            </ul>
        </div>
    </div>
);

export default toolbar;