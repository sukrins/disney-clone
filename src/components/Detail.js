import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { auth } from '../firebase';
import { selectUserName, setUserLogin } from '../features/user/userSlice';
import { useHistory } from 'react-router-dom'
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) => {
            if (doc.exists) {
                setMovie(doc.data());
            } else {

            }
        })
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));
            } else {
                history.push('/login');
            }
        })
    }, [])

    return (
        <div>
            { !userName ? (
                <>
                    <Login />
                </>
            ) :
                <Container>
                    <Background>
                        <img src={movie?.backgroundImg} />
                    </Background>
                    <ImgTitle>
                        <img src={movie?.titleImg} />
                    </ImgTitle>
                    <Controls>
                        <PlayButton>
                            <img src="https://sukrins.github.io/disney-clone/images/play-icon-black.png" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="https://sukrins.github.io/disney-clone/images/play-icon-white.png" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="https://sukrins.github.io/disney-clone/images/group-icon.png" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie?.subTitle}
                    </SubTitle>
                    <Description>
                        {movie?.description}
                    </Description>
                </Container>
            }
        </div>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%
        height: 100%;
        object-fit: cover;
    }
`
const ImgTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);

    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;    
    border-radius: 50%;
    display: flex;
    align-item: center;
    justify-content: center;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`