import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { requestMovieDetails } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import {
  Container,
  List,
  ListInfo,
  LinkInfo,
  ActorsFilms,
  AddInfo,
} from './MovieDetails.styled';

/*   ====== HOOKS ======*/
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  /*   ====== DESTRUCTURIZATION  ======*/
  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  const defaultNoImages =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  /*   ====== FETCH REQUEST ======*/
  useEffect(() => {
    const getMovieDetailsFilms = () => {
      setLoading(true);

      requestMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          toast.error(
            'Sorry, we didnt find what you were looking for, try again'
          );
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  /*   ====== RENDER ======*/
  return (
    <main>
      {movieInfo && (
        <Container>
          <div>
            <img
              width="300px"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `${defaultNoImages} }`
              }
              alt={original_title}
            />
          </div>

          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}

              <AddInfo>
                <h3>Additional information</h3>
                <ListInfo>
                  <LinkInfo to="cast">Actors</LinkInfo>
                  <ActorsFilms>
                    <LinkInfo to="reviews">Reviews</LinkInfo>
                  </ActorsFilms>
                </ListInfo>
                <Outlet />
              </AddInfo>
            </List>
          </div>

          <Link to={location.state?.from ?? '/'}></Link>
          {loading && <Loader />}
        </Container>
      )}
    </main>
  );
};

export default MovieDetails;
