import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
// } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import './styles/global.css';
// Teste
import Routes from './routes';

function App() {
    return (
        <HashRouter >
            <Routes />
        </HashRouter>
    );
}

export default App;
