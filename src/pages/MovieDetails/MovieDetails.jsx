import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
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
  NameDetailsMovie,
  UserCont,
  Title,
  Img,
  NameDescription,
} from './MovieDetails.styled';

const MovieDetails = () => {
  /*   ====== HOOKS ======*/
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  /*   ====== FETCH REQUEST ======*/
  useEffect(() => {
    async function getMovieDetailsFilms() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        toast.error('Nothing found');
      } finally {
        setLoading(false);
      }
    }
    getMovieDetailsFilms();
  }, [movieId]);

  if (!movieDetails) {
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

  /*   ====== CONVERT MINUTES TO HOURS  ======*/
  function getTimeFromMins(mins) {
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;

    if (hours === 0) {
      return minutes + 'm';
    }

    if (minutes === 0) {
      return hours + 'h';
    }

    return ` ${hours}h ${minutes}m `;
  }

  /*   ====== DESTRUCTURIZATION  ======*/
  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
    runtime,
  } = movieDetails;

  const defaultNoImages =
    'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
  const posterFilms = 'https://image.tmdb.org/t/p/w500';

  /*   ====== DESTRUCTURIZATION - TITLE  ======*/
  const nameTitle = release_date.slice(0, 4) || 'No date found';

  /*   ====== DESTRUCTURIZATION - RELEASE DATE  ======*/
  const releaseDate =
    release_date.length === 0 ? (
      'No date found'
    ) : (
      <TextOverview>{dayjs(release_date).format('DD/ MM/ YYYY')}</TextOverview>
    );

  /*   ====== DESTRUCTURIZATION - OVERVIEW  ======*/
  const overwiewText =
    overview.length === 0 ? (
      'No plot found'
    ) : (
      <b>
        <NameDescription>{overview}</NameDescription>
      </b>
    );

  /*   ====== DESTRUCTURIZATION - RUN TIME  ======*/
  const runTime =
    runtime > 0 ? (
      <TextOverview>{getTimeFromMins(runtime)} (duration)</TextOverview>
    ) : (
      'No time found'
    );

  /*   ====== DESTRUCTURIZATION - USER SCORE  ======*/
  const userScore =
    vote_average > 0 ? (
      <TextOverview>
        {Math.round(vote_average * 10)} % (average vote)
      </TextOverview>
    ) : (
      'No rating found'
    );

  /*   ====== DESTRUCTURIZATION - GENRES  ======*/
  const genresFilms =
    genres.length > 0 ? (
      <TextOverview>{genres.map(genre => genre.name).join(' / ')}</TextOverview>
    ) : (
      'No genres found'
    );

  /*   ====== RENDER ======*/
  return (
    <main>
      {
        <Container>
          <div>
            <Img
              src={
                poster_path
                  ? `${posterFilms}${poster_path}`
                  : `${defaultNoImages} }`
              }
              alt={original_title}
            />
          </div>

          <ContMovieDetails>
            <UserCont>
              <Title>
                <b>
                  {title} ({nameTitle})
                </b>
              </Title>
            </UserCont>

            <UserCont>
              <NameDetailsMovie>Release Date •</NameDetailsMovie>

              <TextOverview>{releaseDate}</TextOverview>
            </UserCont>

            <NameDetailsMovie>
              <b>Overview •</b>
            </NameDetailsMovie>

            <TextOverview>{overwiewText}</TextOverview>

            <UserCont>
              <NameDetailsMovie>Run time •</NameDetailsMovie>

              <TextOverview>{runTime}</TextOverview>
            </UserCont>

            <UserCont>
              <NameDetailsMovie>User score •</NameDetailsMovie>

              <TextOverview>{userScore}</TextOverview>
            </UserCont>

            <UserCont>
              <NameDetailsMovie>Genres •</NameDetailsMovie>

              <TextOverview>{genresFilms}</TextOverview>
            </UserCont>

            <UserCont>
              <NameDetailsMovie>
                <b>Additonal information •</b>
              </NameDetailsMovie>
            </UserCont>

            <List>
              <div>
                <ListInfo>
                  <LinkInfo to="cast">Actors •</LinkInfo>

                  <ActorsFilms>
                    <LinkInfo to="reviews">Reviews •</LinkInfo>
                  </ActorsFilms>
                </ListInfo>
                <Outlet />
              </div>
            </List>
          </ContMovieDetails>

          <Link to={location.state?.from || '/'}>
            <ButtonLink type="button">
              <TbArrowBigLeftLine
                size={50}
                style={{
                  position: 'fixed',
                  top: '193px',
                  left: '0',
                }}
              />
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
