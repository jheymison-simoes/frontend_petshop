import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';

// Importando estilos
import '../../styles/global.css';
import './style.css';

// Importando logo e imagens
import LogoVitrine from '../../images/logo-vitrine.png';

import OptionDog from '../../images/options/option-dog.png';
import OptionCat from '../../images/options/option-cat.png';
import Optionfish from '../../images/options/option-fish.png';
import OptionBirds from '../../images/options/option-birds.png';
import OptionReptile from '../../images/options/option-reptile.png';
import OptionRodent from '../../images/options/option-rodent.png';


function HomePage(){
    return (
        <div id="home-page">
            <div className="home-options">
                <div className="home-imgLogo">
                    <img id="img-logo" src={LogoVitrine} alt="Vitrine dos Animais"/>
                </div>

                <div className="home-options-select">
                    <h1>Qual é o seu Pet?</h1>

                    <div className="options">
                        <Link to="/Canino/AlimentadoresBebedores">
                            <div className="options-select">
                                <img id="img-select" src={OptionDog} alt="Cachorro"/>
                                <p>Cachorro</p>
                            </div>
                        </Link>

                        <Link to="/Felino/AlimentadoresBebedores">
                            <div className="options-select">
                                <img id="img-select" src={OptionCat} alt="Gato"/>
                                <p>Gato</p>
                            </div>
                        </Link>

                        <Link to="/Peixe/AlimentadoresBebedores">
                            <div className="options-select">
                                <img id="img-select" src={Optionfish} alt="Peixe"/>
                                <p>Peixe</p>
                            </div>
                        </Link>

                        <Link to="/Reptil/AlimentadoresBebedores">
                            <div className="options-select">
                                <img id="img-select" src={OptionReptile} alt="Réptil"/>
                                <p>Réptil</p>
                            </div>
                        </Link>


                        <Link to="/Ave/AlimentadoresBebedores">
                            <div className="options-select">
                                <img id="img-select" src={OptionBirds} alt="Pássaro"/>
                                <p>Pássaro</p>
                            </div>
                        </Link>

                        <Link to="/Roedor/AlimentadoresBebedores">
                            <div className="options-select">
                                <img id="img-select" src={OptionRodent} alt="Roedor"/>
                                <p>Roedor</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <NavBar />
            </div>
            <div className="home-background-dir">
            </div>
        </div>
    );
}

export default HomePage;