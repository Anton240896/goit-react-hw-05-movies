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
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
        <a href="/https://www.themoviedb.org/">
          <SiThemoviedatabase size={300} color="red" />
        </a>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
