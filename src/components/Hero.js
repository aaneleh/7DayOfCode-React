import React from 'react';
import styled from 'styled-components'
import heroShape from '../assets/hero-shape.svg'
import planta from '../assets/imagem-hero.png'
import TextoHero from '../components/TextoHero'

const Container = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
`
const Planta = styled.img`
  position: absolute;
  z-index: -1;
  right: 0;
`
const Forma = styled.img`
  position: absolute;
  z-index: -10;
  right: -30%;
  top: -50%;
`

export default function Hero(){
  return (
    <Container>
      <TextoHero />
      <Planta src={planta}></Planta>
      <Forma src={heroShape}></Forma>
    </Container>
  );
};
