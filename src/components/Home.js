import React, { useEffect } from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { auth } from '../firebase';
import { selectUserName, setUserLogin } from '../features/user/userSlice';
import { useHistory } from 'react-router-dom'
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            });
            dispatch(setMovies(tempMovies));
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

                    <>
                        <ImgSlider />
                        <Viewers />
                        <Movies />
                    </>
                </Container>
            }
        </div>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("https://sukrins.github.io/disney-clone/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`