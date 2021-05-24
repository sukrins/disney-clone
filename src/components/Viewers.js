import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="https://sukrins.github.io/disney-clone/images/viewers-disney.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="https://sukrins.github.io/disney-clone/videos/1564674844-disney.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="https://sukrins.github.io/disney-clone/images/viewers-pixar.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="https://sukrins.github.io/disney-clone/videos/1564676714-pixar.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="https://sukrins.github.io/disney-clone/images/viewers-marvel.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="https://sukrins.github.io/disney-clone/videos/1564676115-marvel.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="https://sukrins.github.io/disney-clone/images/viewers-starwars.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="https://sukrins.github.io/disney-clone/videos/1608229455-star-wars.mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="https://sukrins.github.io/disney-clone/images/viewers-national.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="https://sukrins.github.io/disney-clone/videos/1564676296-national-geographic.mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(5, minmax(0,1fr));
    }
`

const Wrap = styled.div`
    border-radius: 10px;    
    border: 3px solid rgba(249, 249, 249, 0.1);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;
    overflow: hidden;

    img{
        inset: 0px;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`