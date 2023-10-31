import { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';

import { TbArrowBigLeftLine } from 'react-icons/tb';
import toast from 'react-hot-toast';

import { requestMovieDetails } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import {
  Container,
  List,
  ListInfo,
  LinkInfo,
  ActorsFilms,
  TextOverview,
  ButtonLink,
  ContMovieDetails,
  NameDetails,
  NameFilms,
  NameDetailsMovie,
} from './MovieDetails.styled';

/*   ====== HOOKS ======*/
const MovieDetails = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  /*   ====== FETCH REQUEST ======*/
  useEffect(() => {
    const getMovieDetailsFilms = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await requestMovieDetails(movieId);
        setMovieInfo(data);
      } catch (error) {
        toast.error('Sorry, we didnt find anything');
      } finally {
        setLoading(false);
      }
    };
    getMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }
  // useEffect(() => {
  //   const getMovieDetailsFilms = () => {
  //     setLoading(true);

  //     requestMovieDetails(movieId)
  //       .then(detailMovie => {
  //         setMovieInfo(detailMovie);
  //       })
  //       .catch(error => {})
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };

  //   getMovieDetailsFilms();
  // }, [movieId]);

  /*   ====== DESTRUCTURIZATION  ======*/
  const defaultNoImages =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  const posterPathOrigin = 'https://image.tmdb.org/t/p/w500';

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo;

  /*   ====== RENDER ======*/
  return (
    <main>
      {
        <Container>
          <div>
            <img
              width="300px"
              src={
                poster_path
                  ? `${posterPathOrigin}${poster_path}`
                  : `${defaultNoImages} }`
              }
              alt={original_title}
            />
          </div>

          <ContMovieDetails>
            <NameFilms>
              <b>
                {title} ({release_date.slice(0, 4)})
              </b>
            </NameFilms>
            <NameDetailsMovie>
              <b>Overview</b>
            </NameDetailsMovie>
            <TextOverview>{overview}</TextOverview>
            <NameDetailsMovie>User score:</NameDetailsMovie>{' '}
            <TextOverview>{popularity}</TextOverview>
            <NameDetailsMovie>
              <b>Genres</b>
            </NameDetailsMovie>
            <List>
              {genres.map(genre => (
                <NameDetails key={genre.id}>{genre.name}</NameDetails>
              ))}

              <div>
                <NameDetailsMovie>
                  <b>Additional information</b>
                </NameDetailsMovie>
                <ListInfo>
                  <LinkInfo to="cast">Actors</LinkInfo>

                  <ActorsFilms>
                    <LinkInfo to="reviews">Reviews</LinkInfo>
                  </ActorsFilms>
                </ListInfo>
                <Outlet />
              </div>
            </List>
          </ContMovieDetails>

          <Link to={location.state?.from ?? '/'}>
            <ButtonLink type="button">
              <TbArrowBigLeftLine size={50} />
            </ButtonLink>
          </Link>

          {loading && <Loader />}
          {error && toast.error(`Sorry,we didnt find anything`)}
        </Container>
      }
    </main>
  );
};

export default MovieDetails;
