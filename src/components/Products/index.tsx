import React from 'react';

import '../../styles/global.css';
import './style.css';

import Imagem from '../../images/products/comedouro.png';

function Products() {

    return (
        <div className="list-products-products">

            <div className="title-category">
                <h1>Alimentadores e Bebedores</h1>
            </div>

            <div className="center-products">
                <div className="products">
                    <div className="products-background">
                        <img src={Imagem} alt="Comedouro para Cachorro" className="img-products"/>
                        <div className="description-products">
                            Prato de Comida para cachorro gsdfgsdfhsdfhfghjdgj asdgadfgadfg adfg adfg dg
                        </div>
                        <div className="value-products">
                            R$ 52,99
                        </div>
                        <button className="btn-products">Comprar</button>
                    </div>
                </div>

                <div className="products">
                    <div className="products-background">
                        <img src={Imagem} alt="Comedouro para Cachorro" className="img-products"/>
                        <div className="description-products">
                            Prato de Comida para cachorro gsdfgsdfhsdfhfghjdgj asdgadfgadfg adfg adfg dg
                        </div>
                        <div className="value-products">
                            R$ 52,99
                        </div>
                        <button className="btn-products">Comprar</button>
                    </div>
                </div>

                <div className="products">
                    <div className="products-background">
                        <img src={Imagem} alt="Comedouro para Cachorro" className="img-products"/>
                        <div className="description-products">
                            Prato de Comida para cachorro gsdfgsdfhsdfhfghjdgj asdgadfgadfg adfg adfg dg
                        </div>
                        <div className="value-products">
                            R$ 52,99
                        </div>
                        <button className="btn-products">Comprar</button>
                    </div>
                </div>

                <div className="products">
                    <div className="products-background">
                        <img src={Imagem} alt="Comedouro para Cachorro" className="img-products"/>
                        <div className="description-products">
                            Prato de Comida para cachorro gsdfgsdfhsdfhfghjdgj asdgadfgadfg adfg adfg dg
                        </div>
                        <div className="value-products">
                            R$ 52,99
                        </div>
                        <button className="btn-products">Comprar</button>
                    </div>
                </div>

                <div className="products">
                    <div className="products-background">
                        <img src={Imagem} alt="Comedouro para Cachorro" className="img-products"/>
                        <div className="description-products">
                            Prato de Comida para cachorro gsdfgsdfhsdfhfghjdgj asdgadfgadfg adfg adfg dg
                        </div>
                        <div className="value-products">
                            R$ 52,99
                        </div>
                        <button className="btn-products">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;