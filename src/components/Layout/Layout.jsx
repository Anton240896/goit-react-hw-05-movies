import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SiThemoviedatabase } from 'react-icons/si';

import { Container, Nav, Link, LabelSwitch, Slider } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  /*   ====== SWITCH-THEME ======*/
  const whiteTheme =
    'background-image:radial-gradient(circle, #dbdbe3 60%, rgb(0, 0, 0)75%)';
  const blackTheme =
    'background-image:radial-gradient(circle, #060606 60%, rgb(249 249 249)75%)';

  /*   ====== HOOKS ======*/
  const [toggle, setToggle] = useState(false);
  const [bodyColor, setBodyColor] = useState('whiteTheme');

  const handleToggle = () => {
    setToggle(!toggle);
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

        <LabelSwitch>
          <input type="checkbox" onClick={handleToggle} />
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
