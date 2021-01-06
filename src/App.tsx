import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import './styles/global.css';

import Routes from './routes';

function App() {
    return (
        <Router >
            <Switch>
                <Routes />
            </Switch>
        </Router>
    );
}

export default App;
