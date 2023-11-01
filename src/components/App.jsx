/*   ====== IMPORT ======*/

import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from 'components/Layout/Layout';

// import Home from 'path/to/pages/Home;';
// import Movies from 'path/to/pages/Movies';
// import MovieDetails from 'path/to/pages/MovieDetails';
// import Cast from 'path/to/pages/Cast';
// import Reviews from 'path/to/pages/Reviews';

/*   ====== IMPORT-LAZY ======*/

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

/*   ====== ROUTES ======*/

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>

      <Route path="https://www.themoviedb.org/"></Route>
    </Routes>
  );
};
