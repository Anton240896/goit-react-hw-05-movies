import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PiFilmSlateBold } from 'react-icons/pi';
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
        <PiFilmSlateBold size={500} />
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
