import React from 'react';

// Images
import VaniljeIs from '../assets/vanilje-is.png';
import IngredientVanilje from '../assets/ingredient-vanilje.png';

const DinParadisPage = () => {
    return (
        <div>
            <div className="config-container">
                <div className="container-full cream" style={{paddingTop: '2em'}}>
                    <div className="row col-xs-12 center">
                        <h1 className="heading">DIN PARADIS</h1>
                        <h3>Vælg en smag du vil starte med. Du kan herefter tilføje ingredienser såsom stykker af oreo, karamelsovs og meget mere.</h3>
                        <div className="preview">
                            <img src={VaniljeIs} alt="Vanilje is som placeholder for custom is"/>
                        </div>
                    </div>
                </div>
                <div className="ingredient-button-wrapper container-full">
                    <div className="ingredient-button">
                        <button>
                            <img src={IngredientVanilje} alt="Vanilje is i en kop"/>
                            Vanilje
                        </button>
                    </div>
                    <div className="ingredient-button">
                        <button>
                            <img src={IngredientVanilje} alt="Vanilje is i en kop"/>
                            Vanilje
                        </button>
                    </div>
                    <div className="ingredient-button">
                        <button>
                            <img src={IngredientVanilje} alt="Vanilje is i en kop"/>
                            Vanilje
                        </button>
                    </div>
                    <div className="ingredient-button">
                        <button>
                            <img src={IngredientVanilje} alt="Vanilje is i en kop"/>
                            Vanilje
                        </button>
                    </div>
                    <div className="ingredient-button">
                        <button>
                            <img src={IngredientVanilje} alt="Vanilje is i en kop"/>
                            Vanilje
                        </button>
                    </div>
                </div>
                <div className="ingredient-toolbar-wrapper container-full">

                </div>
            </div>
        </div>
    )
}

export default DinParadisPage
