import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <LogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Endless entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic. From new releases, to your favorite classics, the past, present, and future are yours. Shows: Beauty and the Beast, Moana, Aladdin, Mary Poppins, Pinocchio, Cinderella, Lion King.                </Description>
                <LogoTwo src="/images/cta-logo-two.png" />
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-position: top;
        background-size: cover;
        background-image: no-repeat;
        background-image: url("/images/login-background.jpg");
        opacity: 0.7;
        z-index: -1;
    }
`

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;    
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const LogoOne = styled.img``

const LogoTwo = styled.img`
    width: 90%;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

