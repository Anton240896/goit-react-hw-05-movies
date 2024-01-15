import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TbArrowBigLeftLine } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

import ListFilms from 'components/ListFilms/ListFilms';
import Form from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';

import { requestSearch } from 'components/Api/Api';
import { ButtonLink } from 'pages/MovieDetails/MovieDetails.styled';
import { NoFilms } from './Movies.styled';

import toast from 'react-hot-toast';

const Movies = () => {
  /*   ====== HOOKS ======*/
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [btnLoadMore, setBtnLoadMore] = useState(false);
  const query = searchParams.get('query');
  const location = useLocation();

  /*   ====== FETCH REQUEST ======*/
  useEffect(() => {
    if (!query) {
      return;
    }

    const effectAction = async () => {
      try {
        setLoading(true);
        const data = await requestSearch(query);
        setMovies(data);
      } catch (error) {
        toast.error('Sorry, nothing found');
      }
    };
    effectAction();
  }, [query]);

  const submitAction = value => {
    setSearchParams({ query: value });
  };

  /*   ====== RENDER ======*/
  return (
    <div>
      <Form submitAction={submitAction} startInputText={query} />

      <Link to={location.state?.from ?? '/'}>
        <ButtonLink type="button">
          <TbArrowBigLeftLine size={50} />
        </ButtonLink>
      </Link>

      {loading ?? <Loader />}

      <ListFilms films={movies} />

      {movies.length === 0 && <NoFilms>No films, enter your request</NoFilms>}
    </div>
  );
};

export default Movies;
