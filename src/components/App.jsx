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

export const Home = lazy(() => 'pages/Home/Home');
export const Movies = lazy(() => 'pages/MovieDetails/MovieDetails');
export const MovieDetails = lazy(() => 'pages/MovieDetails/MovieDetails');
export const NotFound = lazy(() => 'pages/NotFound/NotFound');
export const Cast = lazy(() => 'components/Cast/Cast');
export const Reviews = lazy(() => 'components/Reviews/Reviews');

/*   ====== ROUTES ======*/

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
