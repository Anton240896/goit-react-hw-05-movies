import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestActors } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

/*   ====== HOOKS ======*/

export const Cast = () => {
  const [movieId] = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  /*   ======  REQUEST FILMS ACTORS ======*/

  useEffect(() => {
    const actorsFilms = async () => {
      setLoading(true);

      try {
        const actorsFilms = await requestActors(movieId);
        setActors(actorsFilms);
        toast.success('😊 Yes, we found actors');
      } catch (error) {
        toast.error('🥺 Sorry, we found nothing');
      } finally {
        setLoading(false);
      }
    };
    actorsFilms();
  }, [movieId]);

  /*   ====== RENDER ======*/
  return (
    <div>
      {loading && <Loader />}

      <ul>
        {actors.map(({ id, name, profile_path, original_name, character }) => (
          <li key={id}>
            <img
              width="300px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
      <Toaster position="top-right" />
    </div>
  );
};
