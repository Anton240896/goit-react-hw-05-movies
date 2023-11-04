import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { SiThemoviedatabase } from 'react-icons/si';

import { Container, Nav, Link } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
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
            style={{ marginTop: ' 80px', marginLeft: '50px' }}
          />
        </a>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
