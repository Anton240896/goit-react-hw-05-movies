import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SiThemoviedatabase } from 'react-icons/si';

import {
  Container,
  Nav,
  Link,
  LabelSwitch,
  Slider,
  LinkMovie,
} from './Layout.styled';

import { Loader } from 'components/Loader/Loader';

/*   ====== SWITCH-THEME ======*/
export const Layout = () => {
  const whiteTheme =
    'background-image:radial-gradient(circle, #dbdbe3 60%, rgb(0, 0, 0)75%)';
  const blackTheme =
    'background-image:radial-gradient(circle, rgb(0, 0, 0) 60%, #dbdbe3 75%)';

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

        <LinkMovie href="https://www.themoviedb.org/">
          <SiThemoviedatabase
            size={450}
            color="red"
            style={{
              marginTop: ' 80px',
              marginLeft: '50px',
            }}
          />
        </LinkMovie>

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
