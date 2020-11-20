import React, { Component } from 'react';

import Slide from '../../components/SliderSlick';
import NavBarResponsive from '../../components/NavBarResposive';
import Products from '../../components/Products';

// Importando estilos
import '../../styles/global.css';
import './style.css';

class ListProducts extends Component {

    state = {
        navbarOpen: false
    }

    
    
    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    
    render() {
        return (
            <div id="list-products">
                <div className="list-products-nav">
                    <NavBarResponsive 
                        navbarState={this.state.navbarOpen} 
                        handleNavbar={this.handleNavbar} 
                    />
                </div>

                <div className="list-products-category" 
                    
                >
                    <h1 className="list-products-title">Oque você procura?</h1>
                    <div className="list-products-slider">
                        <Slide />
                    </div>
                </div>

                <Products />

                {/* <InfiniteScroll /> */}

                
            </div>
        )
    }
}

export default ListProducts;