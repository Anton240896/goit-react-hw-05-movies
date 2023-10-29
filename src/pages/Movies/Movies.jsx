import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import ListFilms from 'components/ListFilms/ListFilms';
import Form from 'components/Form/Form';
import { requestSearch } from 'components/Api/Api';
// import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';

/*   ====== HOOKS ======*/
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');
  // const [loading, setLoading] = useState(false);

  /*   ====== FETCH REQUEST ======*/
  useEffect(() => {
    if (!query) return;
    const effectAction = async () => {
      try {
        const data = await requestSearch(query);
        setMovies(data.results);
      } catch (error) {
        toast.error('Sorry, we didnt find anything');
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
      {/* {loading && <Loader />} */}

      <ListFilms films={movies} />
      <Outlet />
    </div>
  );
};

export default Movies;
