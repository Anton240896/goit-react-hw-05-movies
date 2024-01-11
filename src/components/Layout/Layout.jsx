import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SiThemoviedatabase } from 'react-icons/si';
import { FaFacebookSquare, FaWikipediaW, FaLinkedin } from 'react-icons/fa';

import {
  Container,
  Nav,
  Link,
  LabelSwitch,
  Slider,
  LinkMovie,
  LinkFace,
  LinkWiki,
  LinkLnkdn,
  LinkRegistration,
  ButtonRegistration,
  ButtonListOfActors,
  BtnLogin,
  BtnTop,
} from './Layout.styled';

import { Loader } from 'components/Loader/Loader';

/*   ====== SWITCH-THEME ======*/
export const Layout = () => {
  const whiteTheme =
    'background-image:radial-gradient(circle, #dbdbe3 60%, rgb(0, 0, 0)75%)';
  const blackTheme =
    'background-image:radial-gradient(circle, rgb(0, 0, 0) 70%, #dbdbe3 75%)';

  /*   ====== HOOKS ======*/
  const [toggle, setToggle] = useState(false);
  const [bodyColor, setBodyColor] = useState('whiteTheme');

  const handleSwitch = () => {
    setToggle(toggle);
    if (bodyColor === blackTheme) {
      setBodyColor(whiteTheme);
    } else {
      setBodyColor(blackTheme);
    }
  };

  /*   ====== RENDER ======*/
  return (
    <Container>
      <header>
        <Nav>
          <Link to="/" end>
            <b>Home</b>
          </Link>

          <Link to="/movies">
            <b>Movies</b>
          </Link>
        </Nav>

        <a href="https://www.themoviedb.org/login">
          <BtnLogin>LOGIN</BtnLogin>
        </a>

        <a href="https://www.themoviedb.org/2023">
          <BtnTop>TOP MOVIES</BtnTop>
        </a>

        <LinkMovie href="https://www.themoviedb.org/">
          <SiThemoviedatabase
            size={350}
            style={{
              marginTop: '14px',
              marginLeft: '150px',
            }}
          />
        </LinkMovie>

        <LinkFace href="https://www.facebook.com/themoviedb/">
          <FaFacebookSquare
            size={40}
            style={{
              marginTop: '20px',
            }}
          />
        </LinkFace>

        <LinkWiki href="https://uk.wikipedia.org/wiki/TMDb">
          <FaWikipediaW
            size={40}
            style={{
              marginTop: '20px',
            }}
          />
        </LinkWiki>

        <LinkLnkdn href="https://www.linkedin.com/company/themoviedb.org/about/">
          <FaLinkedin
            size={40}
            style={{
              marginTop: '20px',
            }}
          />
        </LinkLnkdn>

        <LinkRegistration href="https://www.themoviedb.org/signup">
          <ButtonRegistration>SIGN UP</ButtonRegistration>
        </LinkRegistration>

        <LinkRegistration href="https://www.themoviedb.org/person">
          <ButtonListOfActors>LIST OF ACTORS</ButtonListOfActors>
        </LinkRegistration>

        <LabelSwitch>
          <input type="checkbox" onClick={handleSwitch} />
          <Slider></Slider>
        </LabelSwitch>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <style>
        {`
          body {
            background-image; ${bodyColor};
          }
        `}
      </style>
    </Container>
  );
};
