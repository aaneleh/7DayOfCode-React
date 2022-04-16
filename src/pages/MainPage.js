import React from 'react'
import styled from 'styled-components'

//COMPONENTES
import Menu from '../components/Menu'
import Hero from '../components/Hero'

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`
const Content = styled.div`
    margin-top: 7em;
    width: min(1236px,90%);
`

export default function MainPage(){
    return (
        <Main>
            <Menu/>

            <Content>
                <Hero/>
            </Content>

        </Main>
    );
};
