import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props: any) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <>
            <NavBar style={barAnimation}>
                <FlexContainer>
                <Brand />
                <NavLinks style={linkAnimation}>
                    <Link to="/" >Home</Link>
                    <Link to="/" >Sobre</Link>
                    <Link to="/" >Contatos</Link>
                    <Link to="/" >Produtos</Link>
                    <Link to="/" >Serviços</Link>
                </NavLinks>
                <BurgerWrapper>
                    <BurgerMenu
                    navbarState={props.navbarState} 
                    handleNavbar={props.handleNavbar}
                    />
                </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu 
                navbarState={props.navbarState} 
                handleNavbar={props.handleNavbar}
            />
        </>
    )
}

export default Navbar

const NavBar = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #4abdac;
    z-index: 1;
    font-size: 1.4rem;
`;

const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    margin: auto;
    padding: 0 2rem;;
    justify-content: space-between;
    height: 5rem;
`;

const NavLinks = styled(animated.ul)`
    justify-self: end;
    list-style-type: none;
    margin: auto 0;

    & a {
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 1px solid transparent;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;

        &:hover {
        color: #ffffff;
        border-bottom: 1px solid #ffffff;
        }

        @media (max-width: 768px) {
        display: none;
        }
    }
`;

const BurgerWrapper = styled.div`
    margin: auto 0;

    @media (min-width: 769px) {
        display: none;
    }
`;