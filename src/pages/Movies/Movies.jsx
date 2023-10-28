import { useState } from 'react';
import ListFilms from 'components/ListFilms/ListFilms';
import Form from 'components/Form/Form';
import { requestSearch } from 'components/Api/Api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'components/Loader/Loader';

/*   ====== HOOKS ======*/
const Movies = () => {
  const [queryFilms, setQueryFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emptyText, setEmptyText] = useState(false);

  /*   ====== FETCH REQUEST ======*/
  const searchMovies = queryMovie => {
    setLoading(true);

    requestSearch(queryMovie)
      .then(results => {
        setQueryFilms(results);
        setEmptyText(results.length === '');
      })
      .catch(error => {
        toast.error(
          'Sorry, we didnt find what you were looking for, try again '
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /*   ====== RENDER ======*/
  return (
    <div>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {emptyText &&
        toast.error('There is no movies with this request. Please, try again')}
      {queryFilms && <ListFilms films={queryFilms} />}
      <Toaster position="top-right" />
    </div>
  );
};

export default Movies;