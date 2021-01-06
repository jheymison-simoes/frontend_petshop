import React, { useEffect } from "react";
import { useHistory, useLocation } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importando Paginas
import HomePage from './pages/HomePage';
import ListProducts from './pages/ListProducts';
import Admin from './pages/Admin';
import AdminController from './pages/Admin/AdminController';
import Checkout from './pages/Checkout';
// import Cart from './pages/CartPage';
import api from './services/api';

function Routes() {

    const location = useLocation().pathname;
    const history = useHistory();

    const userName = localStorage.getItem("userName");
    const userToken = localStorage.getItem("userToken");

    if(location != "/adminController"){
        localStorage.clear();
    }

    // const data = {
    //     users: userName,
    //     token: userToken
    // };

    //     try {
    //         api.post('usersTokenAuthenticate', data);
    //     } catch (err) {
    //         // console.log("Falha no Login!");
    //         history.push("/admin");
    //     }

    // if(userName == null && userToken == null && location == "/adminController"){
    //     // const response = api.post('usersAuthenticate', data);
    //     history.push("/admin");
        
    // } else {
    //     try {
    //         api.post('usersTokenAuthenticate', data);
    //     } catch (err) {
    //         // console.log("Falha no Login!");
    //         history.push("/admin");
    //     }
    // }
    

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
                    // console.log(response.data.message);
        
                } catch (err) {
                    // history.push('/admin');
                    history.goBack();
                }
            }
            authenticate();

        
            
        

        // async function authenticate2(){
    
        //     const data = {
        //         users: userName,
        //         token: userToken
        //     };
    
        //     try {
    
        //         const response = await api.post('usersTokenAuthenticate', data);
                
    
        //     } catch (err) {
        //         console.log("Falha no Login!");
                
        //     }
    
        // }

        

        
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/admin" exact component={Admin} />
                
                <Route path="/adminController" exact component={AdminController} />
                
                
                <Route path="/checkout" exact component={Checkout} />
                {/* <Route path="/cart" exact component={Cart} /> */}
                <Route path="/Canino" component={ListProducts} />
                <Route path="/Felino" component={ListProducts} />
                <Route path="/Peixe" component={ListProducts} />
                <Route path="/Reptil" component={ListProducts} />
                <Route path="/Ave" component={ListProducts} />
                <Route path="/Roedor" component={ListProducts} />
                {/* <Route path="/:group" component={ListProducts} />
                <Route path="/:group/:category" component={ListProducts} /> */}
                
            </Switch>
        </BrowserRouter>
        
    );
}

export default Routes