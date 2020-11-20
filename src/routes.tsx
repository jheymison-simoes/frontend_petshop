import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importando Paginas
import HomePage from './pages/HomePage';
import ListProducts from './pages/ListProducts';

function Routes() {
    return (
                
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/listproducts" component={ListProducts} />
            </Switch>
        </BrowserRouter>
        
    );
}

export default Routes