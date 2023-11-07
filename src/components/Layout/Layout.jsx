import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SiThemoviedatabase } from 'react-icons/si';

import {
  Container,
  Nav,
  Link,
  ToggleContainer,
  BtnSwitch,
  BtnToggle,
} from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const whiteTheme =
    'bacground-image:radial-gradient(circle, #dbdbe3 60%, rgb(0, 0, 0)75%)';
  const blackTheme =
    'bacground-image:radial-gradient(circle, #060606 60%, rgb(249 249 249)75%)';

  /*   ====== HOOKS ======*/
  const [toggle, setToggle] = useState(false);
  const [bodyColor, setBodyColor] = useState('grey');

  const handleToggle = () => {
    setToggle(!toggle);
    if (bodyColor === 'grey') {
      setBodyColor(blackTheme);
    } else {
      setBodyColor('grey');
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

        <a href="https://www.themoviedb.org/">
          <SiThemoviedatabase
            size={450}
            color="red"
            style={{
              marginTop: ' 80px',
              marginLeft: '50px',
            }}
          />
        </a>

        <ToggleContainer>
          <BtnSwitch className={toggle ? 'active' : ''} onClick={handleToggle}>
            <BtnToggle className={toggle ? 'active' : ''}></BtnToggle>
          </BtnSwitch>
        </ToggleContainer>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <style>
        {`
          body {
            background-color: ${bodyColor};
          }
        `}
      </style>
    </Container>
  );
};
