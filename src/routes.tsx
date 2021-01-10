import React, { useEffect } from "react";
import { useHistory, useLocation } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importando Paginas
import HomePage from './pages/HomePage';
import ListProducts from './pages/ListProducts';
import Admin from './pages/Admin';
import AdminController from './pages/Admin/AdminController';
import Checkout from './pages/Checkout';
import api from './services/api';

function Routes() {

    const location = useLocation().pathname;
    const history = useHistory();

    const userName = localStorage.getItem("userName");
    const userToken = localStorage.getItem("userToken");

    if(location != "/adminController"){
        localStorage.clear();
    }

    if((userName == null || userToken == null) && location == "/adminController"){
        history.push("/admin");
    } else if((userName != null || userToken != null) && location == "/adminController"){
        const authenticate = async () => {
            const data = {
                users: userName,
                token: userToken
            };

            try {
                await api.post('usersTokenAuthenticate', data);        
            } catch (err) {
                history.goBack();
            }
        }
        authenticate();        
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/admin" component={Admin} />
                <Route path="/adminController" component={AdminController} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/Canino" component={ListProducts} />
                <Route path="/Felino" component={ListProducts} />
                <Route path="/Peixe" component={ListProducts} />
                <Route path="/Reptil" component={ListProducts} />
                <Route path="/Ave" component={ListProducts} />
                <Route path="/Roedor" component={ListProducts} />
            </Switch>
        </BrowserRouter>
        
    );
}

export default Routes