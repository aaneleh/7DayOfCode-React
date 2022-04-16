import React, {useState} from 'react';
import styled from 'styled-components'
import MailIcon from '../assets/envelope.svg'

/* NEWSLETTER */
const Form = styled.form`
    position: relative;
    box-shadow: 0px 0px 2px #c4c4c4;
    background-color: #fff;
    border-radius: 2px;
    display: inline-flex;
    justify-content: space-between;
    width: min(80%, 32em);
    height: 3.5em;
    margin-top: 1.75em;
`
const Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 3.5em;
    border: none;
`
const Icon = styled.img`
    position: absolute;
    width: auto;
    height: 1.5em;
    left: 0.5em;
    top: 52%;
    transform: translateY(-50%);
`
const Button = styled.input`
    width: 30%;
    color: #fff;
    padding: 0 1.5em;
    background: #FFCB47;
    border: none;
`


function Newsletter(){
    const [desabilitado, setDesabilitado] = useState(true)

    const confereEmail = (e) => {
        let email = e.target.value
        email.includes("@") && email.length>= 7 ? setDesabilitado(false) : setDesabilitado(true)
    }

    const Assinar = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        alert("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail " + email)
    }

    return (
        <Form onSubmit={Assinar}>
            <Input onChange={confereEmail} name="email" type="text" placeholder="Insira seu e-mail"/>
            <Icon src={MailIcon}></Icon>
            <Button disabled={desabilitado} style={{cursor: desabilitado ? "default" :"pointer" }} type="submit" value="Assinar newsletter"/>
        </Form> 
    );
}

/* CONTAINER PRINCIPAL */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: min(75%, 30em);
`
export default function TextoHero(){
    return (
        <>
            <Container>
                <h4>
                Sua casa com as
                </h4>
                <h1 className="title">
                melhores plantas
                </h1>
                <p>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.<br/>Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </p>

            </Container> 
            <Newsletter/>
        </>
    );
};
