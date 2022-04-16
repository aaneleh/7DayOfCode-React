import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Nav = styled.nav`
    background: transparent;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5em;
    margin-top: 1em;
    width: min(1236px,90%);
`
const Links = styled.div`
    display: inline-flex;
    gap: 0.75em;
`
export default function Menu(){
    return (
        <Nav>
            <div>
                <img src={logo} style={{position: 'relative', top: '-0.5em'}} alt="CasaVerde"></img>
            </div>
            <Links>
                <p> <a href="#"> Como fazer </a> </p>
                <p> / </p>
                <p> <a href="#"> Ofertas </a> </p>
                <p> / </p>
                <a href="#"> Depoimentos </a>
                <p> / </p>
                <a href="#"> Vídeos </a>
                <p> / </p>
                <a href="#"> Meu carrinho </a>
            </Links>
        </Nav>
    );
};
