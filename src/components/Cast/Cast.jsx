import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { requestActors } from 'components/Api/Api';

import Loader from 'components/Loader/Loader';
import {
  ListFilms,
  Name,
  ListImage,
  MessageNoActors,
  NameActor,
} from './Cast.styled';

/*   ====== DEFAULT IMAGES ======*/
const defaultNoImages =
  'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
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
          <ListImage key={id}>
            <img
              width="300px"
              height="400px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${defaultNoImages}`
              }
              alt={name}
            />
            <NameActor>{name}</NameActor>
            <Name>
              <b>Character:</b> {character}
            </Name>
          </ListImage>
        ))}
      </ListFilms>

      <div>
        {actors.length === 0 && (
          <MessageNoActors> ¯\_(ツ)_/¯ No actors found</MessageNoActors>
        )}
      </div>
    </ul>
  );
};

export default Cast;
