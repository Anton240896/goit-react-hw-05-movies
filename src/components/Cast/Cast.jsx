import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestActors } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { ItemFilms } from 'components/ListFilms/ListFilms.styled';
import { ListFilms } from './Cast.styled';

/*   ====== DEFAULT IMAGES ======*/
const defaultNoImages =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

/*   ====== HOOKS ======*/
const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  /*   ======  REQUEST FILMS ACTORS ======*/

  useEffect(() => {
    const getCast = () => {
      setLoading(true);

      requestActors(movieId)
        .then(resp => {
          setActors(resp);
        })
        .catch(error => {
          toast.error('Sorry, we dint find, please try again');
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getCast();
  }, [movieId]);

  /*   ====== RENDER ======*/
  return (
    <ul>
      {loading && <Loader />}

      <ListFilms>
        {actors.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              width="180px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${defaultNoImages}`
              }
              alt={name}
            />
            <p>
              <b>{name}</b>
            </p>
            <p>
              <b>Character:</b> {character}
            </p>
          </li>
        ))}
      </ListFilms>
      <Toaster position="top-right" />
    </ul>
  );
};

export default Cast;
