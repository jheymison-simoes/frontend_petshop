import React from 'react';
import { Link } from 'react-router-dom';


// Importando CSS
import '../../styles/global.css';
import './style.css';

// Importando logo
import LogoNav from '../../images/options/nav-legs.png';


function NavBar() {

    // Verificando de Está na Home
    // Se estiver não deve mostrar o Texto Vitrine dos Animais
    let getUrl = window.location.pathname;

    if(getUrl !== "/"){
        var texto: string = "Vitrine dos Animais";
    } else {
        var texto: string = "";
    }

    return (
        <nav className="navbar" >
            <div className="navbar-logo">
                <div className="navbar-img">
                    <img src={LogoNav} alt="Patas"/>
                    <h1 className="navbar-title">{texto}</h1>
                </div>
            </div>
            <ul className="navbar-ul">
                <li><Link className="navbar-a" to="#">Sobre</Link></li>
                <li><Link className="navbar-a" to="#">Serviços</Link></li>
                <li><Link className="navbar-a" to="#">Contatos</Link></li>
                <li><Link className="navbar-a" to="#">Produtos</Link></li>
                <li><Link className="navbar-a" to="#">Lojas</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;