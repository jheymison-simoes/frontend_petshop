import React, { useState } from 'react';

import Checkout from '../../components/Checkout';
import NavBarResponsive from '../../components/NavBarResposive';

import '../../styles/global.css';
import './style.css';

function CheckoutPage(){

    const [navBarOpen, setNavBarOpen] = useState(false);

    function handleNavBar() {
        if(navBarOpen == true){
            setNavBarOpen(false);
        } else {
            setNavBarOpen(true)
        } 
    }

    return (
        <>
            
            <div className="component-checkout">
                <Checkout />
            </div>
            
        </>
    );
}

export default CheckoutPage;