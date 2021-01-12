import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModalProvider, Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import Swal from "sweetalert2";
import Loader from 'react-loader-spinner'
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdClose, MdDeleteForever, MdShoppingCart } from "react-icons/md";

import "react-simple-hook-modal/dist/styles.css";
import "../../styles/global.css";
import "./style.css";
import "./modal-style.css";

import api from "../../services/api";

interface listProducts {
    id: number;
    description: string;
    amount: number;
    value: number;
    image: string;
    count: number;
    subtotal: number;
};

const titles = [
    {title: "Alimentadores e Bebedores", link: "AlimentadoresBebedores"},
    {title: "Anti Pulgas e Carrapatos", link: "AntiPulgasCarrapatos"},
    {title: "Banho", link: "Banho"},
    {title: "Banho e Tosa", link: "BanhoTosa"},
    {title: "Brinquedos", link: "Brinquedos"},
    {title: "Casas e Camas", link: "CasasCamas"},
    {title: "Consulta Veterinária", link: "ConsultaVeterinaria"},
    {title: "Produtos para Banho", link: "ProdutosBanho"},
    {title: "Petiscos", link: "Petiscos"},
    {title: "Rações", link: "Racoes"},
    {title: "Medicamentos", link: "Medicamentos"},
    {title: "Roupas e Acessórios", link: "RoupasAcessorios"},
];

function Products() {
    const groupLocation = useLocation();
    const stringPath = groupLocation.pathname.split('/');

    const indexPath = `${groupLocation.pathname}`;
    const { isModalOpen, openModal, closeModal } = useModal();

    const [listProducts, setListProducts] = useState<listProducts[]>([]);
    const [newListProducts, setNewListProducts] = useState<listProducts[]>([]);
    const [newCount, setNewCount] = useState(1);
    const [deleteButton, setDeleteButton] = useState(false);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function getApiProducts() {
            setLoading(true);
            await api.get(`products${indexPath}`).then( (response) => {
                const status = response.status;
    
                if(status != null){
                    setListProducts(response.data);
                }
            }).catch(()=> {
                setListProducts([]);
            });
            setLoading(false);
        }
        getApiProducts();
    }, [indexPath]);

    function carrinhoVazio() {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Seu Carrinho está Vazio!',
            confirmButtonColor: '#4abdac',
            iconColor: '#4abdac',
        });
    }

    function totalItens(){
        var itens = 0;
        for(let i = 0; i < sessionStorage.length; i++){
            itens++
        }
        return itens;
    }

    function totalValue(){
        var total = 0;
        newListProducts.map((value)=>{
            total = value.subtotal + total;
        })
        return total;
    }

    function Comprar() {

        // Listando os Produtos no Session Storage e guardando em um Array
        Object.keys(sessionStorage).forEach(function (key) {
            const itens = sessionStorage.getItem(key);
            newListProducts.push(itens !== null ? JSON.parse(itens) : null);
        });

        setTotal(totalValue());

        if(newListProducts.length > 0){
            openModal();
        } else {
            carrinhoVazio();
        }
        
    }

    function ModalClose() {
        function clearArray(array: any) {
            while (array.length) {
                array.pop();
            }
        }
        clearArray(newListProducts); // Limpa o Array toda vez que for fechado o Modal
        closeModal();
    }
    

    return (
        <div className="list-products-products">
            <div className="list-products-top">
                <div className="title-category">
                    {titles.map((value, i) => { 
                        if(stringPath[2] == value.link){
                            return (
                                <h1 key={i}>{ value.title }</h1>
                            );
                        }
                    })}
                </div>

                <div className="list-products-products-group">
                    <button className="list-products-top-btn" type="button" onClick={ Comprar }>
                        <MdShoppingCart />
                        Meu Carrinho
                    </button>
                    <div className="list-products-top-total-itens">{ totalItens() }</div>
                </div>
            </div>
            <div className="center-products">
                                
                {loading == true ?    
                    <Loader className="loadingProducts" type="Puff" color="#4abdac" height={50} width={50} timeout={3000} />
                :
                    <>
                        {listProducts.length == 0 ?   
                            <div className="center-products-clear">Desculpe-me, no momento estamos sem este produto!</div>
                        :
                            listProducts.map((product, i) => {
                                async function Comprar() {
                                    const listsProductsNew = {
                                        id: product.id,
                                        image: product.image,
                                        description: product.description,
                                        amount: product.amount,
                                        value: Number(product.value),
                                        count: 1,
                                        subtotal: Number(product.value)
                                    };

                                    // Adicionando Produtos no Session Storage
                                    const itens = sessionStorage.setItem(
                                        product.id.toString(),
                                        JSON.stringify(listsProductsNew)
                                    );

                                    // Listando os Produtos no Session Storage e guardando em um Array
                                    Object.keys(sessionStorage).forEach(function (key) {
                                        const itens = sessionStorage.getItem(key);
                                        newListProducts.push(itens !== null ? JSON.parse(itens) : null);
                                        setNewListProducts(newListProducts);
                                    });
                                    const total = totalValue();
                                    setTotal(total);
                                    localStorage.setItem("Valor Total: ", total.toString());
                                    await openModal();
                                }

                                return (
                                    <div className="products" key={product.id}>
                                        <div className="products-background">
                                            <img
                                                src={product.image}
                                                alt="Comedouro para Cachorro"
                                                className="img-products"
                                            />
                                            <div className="description-products">
                                                {product.description}
                                            </div>
                                            <div className="value-products">R$ {product.value.toString().replace(".", ",")}</div>
                                            <button
                                                id={product.id.toString()}
                                                className="btn-products" 
                                                onClick={ Comprar }
                                            >
                                                Adicionar ao Carrinho
                                            </button>
                                        </div>
                                    </div>
                                );
                            })                                         
                        }
                    </>
                }
            </div>

            {/* Modal */}
            <ModalProvider backdropClassName="modal-page-backdrop">
                <Modal
                    modalClassName="modal-page"
                    id="any-unique-identifier"
                    isOpen={isModalOpen}
                    transition={ModalTransition.BOTTOM_UP}
                >

                    <div className="modal-header">
                        <h1 className="modal-title">Meu Carrinho</h1>
                        <MdClose
                            className="modal-icon-close"
                            onClick={ModalClose}
                        />
                    </div>

                    <div className="modal-body">
                        <div className="modal-table">
                            <table className="table-items">
                                <thead>
                                    <tr className="table-header">
                                        <td className="table-header-image">Imagem</td>
                                        <td className="table-header-products">Produtos</td>
                                        <td className="table-header-quantities">Quantidade</td>
                                        <td className="table-header-value">Valor</td>
                                        <td className="table-header-action"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    { newListProducts.map( (listProduct, i) => {

                                        const key = listProduct.id.toString();
                                        const itemStorage = sessionStorage.getItem(key);
                                        const objetcItem = itemStorage !== null ? JSON.parse(itemStorage) : null;
                                        const subTotal = objetcItem.subtotal.toFixed(2).toString().replace(".", ",");
                                        
                                        
                                        function Increment(){
                                            
                                            if(listProduct.count >= listProduct.amount){
                                                listProduct.count = listProduct.amount;
                                            } else {
                                                listProduct.count = listProduct.count + 1;
                                            }

                                            listProduct.subtotal = listProduct.value * listProduct.count;
                                            objetcItem.count = listProduct.count;
                                            objetcItem.subtotal = listProduct.value * listProduct.count;
                                            sessionStorage.setItem(key, JSON.stringify(objetcItem));
                                            const total = totalValue();
                                            setTotal(total);
                                            localStorage.setItem("Valor Total: ", total.toString());
                                            return setNewCount(listProduct.count);
                                        }

                                        function Decrement(){
                                            if(listProduct.count <= 1 ){
                                                const Count = 1;
                                                return setNewCount(Count);
                                            } else {
                                                listProduct.count = listProduct.count - 1;
                                                listProduct.subtotal = listProduct.value * listProduct.count;
                                                objetcItem.count = listProduct.count;
                                                objetcItem.subtotal = listProduct.value * listProduct.count;
                                                sessionStorage.setItem(key, JSON.stringify(objetcItem));
                                                const total = totalValue();
                                                setTotal(total);
                                                localStorage.setItem("Valor Total: ", total.toString());
                                                return setNewCount(listProduct.count);
                                            }
                                        }

                                        const handleChange = (event: any) => {
                                            setNewCount(listProduct.count);
                                        }

                                        function DeleteItem () {
                                            sessionStorage.removeItem(key);
                                            newListProducts.splice(i, 1);

                                            if(newListProducts.length <= 0){
                                                sessionStorage.clear();
                                                closeModal();
                                            }
                                            
                                            if(deleteButton == false){
                                                setDeleteButton(true);
                                            } else {
                                                setDeleteButton(false);
                                            }

                                            const total = totalValue();
                                            setTotal(total);
                                            localStorage.setItem("Valor Total: ", total.toString());

                                        }

                                        return (
                                            <tr className="table-body" key={listProduct.id}>
                                                <td className="td-image-table">
                                                    <img src={listProduct.image} alt="Imagens Produtos" className="modal-product-image"/>
                                                </td>
                                                <td className="td-description-table">
                                                    <p className="modal-description"> 
                                                        {listProduct.description}
                                                    </p>
                                                </td>
                                                <td className="td-quantities-table" >
                                                    <FiMinus type="button" onClick={ Decrement } />
                                                    <input type="number" id="inputCount" className="modal-input-quantities" value={ listProduct.count } onChange={ handleChange }/>
                                                    <FiPlus type="button" onClick={ Increment } />
                                                </td>
                                                <td className="td-value-table" >
                                                    <h4>R$ { subTotal }</h4>
                                                </td>
                                                <td className="td-action-table" >
                                                    <MdDeleteForever type="submit" className="td-icon-table" onClick={ DeleteItem }/>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        

                        <div className="modal-amount">
                            <h3 className="h3-amount-total">Valor Total</h3>
                            <div className="modal-amount-value">
                                <h4>R$ { total.toFixed(2).toString().replace(".", ",") }</h4>
                            </div>
                        </div>

                        <div className="modal-buttons">
                            <Link to="/checkout" type="button" className="modal-btn">
                                Finalizar Compra
                            </Link>
                            <button type="button" className="modal-btn" onClick={ModalClose}>
                                Continuar Comprando
                            </button>
                            <Link to="/" type="button" className="modal-btn">
                                Comprar para outro Pet
                            </Link>
                        </div>
                    </div>
                </Modal>
            </ModalProvider>

        
        </div>
    );
}

export default Products;
