import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestActors } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import { ListFilms } from './Cast.styled';
import toast from 'react-hot-toast';

/*   ====== DEFAULT IMAGES ======*/
const defaultNoImages =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

/*   ====== HOOKS ======*/
const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /*   ======  REQUEST FILMS ACTORS ======*/
  useEffect(() => {
    const getCast = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await requestActors(movieId);
        setActors(data);
      } catch (error) {
        toast.error('Sorry, we didnt find anything');
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  // useEffect(() => {
  //   const getCast = () => {
  //     setLoading(true);

  //     requestActors(movieId)
  //       .then(resp => {
  //         setActors(resp);
  //       })
  //       .catch(error => {
  //         toast.error('Sorry we didnt find anythyng');
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };
  //   getCast();
  // }, [movieId]);

  /*   ====== RENDER ======*/
  return (
    <ul>
      {loading && <Loader />}
      {error && toast.error(`Sorry,we didnt find anything`)}

      <ListFilms>
        {actors.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              width="280px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${defaultNoImages}`
              }
              alt={name}
            />
            <p color="red">{name}</p>
            <p>
              <b>Character:</b> {character}
            </p>
          </li>
        ))}
      </ListFilms>
    </ul>
  );
};

export default Cast;
