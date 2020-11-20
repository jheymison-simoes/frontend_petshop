import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoNav from '../../images/options/nav-legs.png';
import '../../styles/global.css';
import './style.css';

function Brand() {

    return (
        <div className="brand">
            <img src={LogoNav} alt="Logo Patas" className="brand-logo-nav"/>
            <p><Link to="/" className="brand-title">Vitrine dos Animais</Link></p>
        </div>
    );
}

export default Brand;