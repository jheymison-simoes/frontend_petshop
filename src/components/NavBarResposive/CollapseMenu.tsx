import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import '../../styles/global.css';
import './style.css';

function CollapseMenu(props: any){
    const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

    if( props.navbarState === true){
        return (
            <CollapseWrapper style={{
                transform: open.interpolate({
                    range: [0, 0.2, 0.3, 1],
                    output: [0, -20, 0, -200],
                    }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
                }}
            >
                <NavLinks>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="https://vitrinedosanimais.com.br/sobre-n%C3%B3s" target="_blanck">Sobre</a></li>
                    <li><a href="https://vitrinedosanimais.com.br/contato" target="_blanck">Contatos</a></li>
                    <li><a href="https://vitrinedosanimais.com.br/servi%C3%A7os-%2F-produtos" target="_blanck">Produtos</a></li>
                    <li><a href="https://vitrinedosanimais.com.br/servi%C3%A7os-%2F-produtos" target="_blanck">Serviços</a></li>
                    <li><a href="https://vitrinedosanimais.com.br/in%C3%ADcio" target="_blanck">Lojas</a></li>
                </NavLinks>
            </CollapseWrapper>

        );
    }
    return null;
}

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
    background: #4abdac;
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
`;

const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 2rem 2rem;

    & li {
        transition: all 300ms linear 0s;
    }

    & a {
        font-size: 1.4rem;
        line-height: 2;
        color: #ffffff;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #fdcb6e;
            border-bottom: 1px solid #fdcb6e;
        }
    }
`;