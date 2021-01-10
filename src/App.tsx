import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
// } from "react-router-dom";
//@ts-ignore
import { BrowserRouter } from 'react-router-dom';

import './styles/global.css';
// Teste
import Routes from './routes';

function App() {
    return (

        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;
