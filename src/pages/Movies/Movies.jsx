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

const Movies = () => {
  /*   ====== HOOKS ======*/
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [emptyPage, setEmptyPage] = useState(false);
  const location = useLocation();
  const query = searchParams.get('query');

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
        setEmptyPage(() => {
          if (data.length === 0) {
            return true;
          }
        });
      } catch (error) {
        console.log(error);
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

      {movies.length > 0 && <ListFilms films={movies} />}
      {emptyPage && <NoFilms>No films, enter your request</NoFilms>}
    </div>
  );
};

export default Movies;
