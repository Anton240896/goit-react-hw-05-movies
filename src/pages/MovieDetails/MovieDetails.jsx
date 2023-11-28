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
  ReleaseText,
  Title,
} from './MovieDetails.styled';
import { MessageNoComments } from 'components/Reviews/Reviews.styled';

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
    'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';

  const posterPath = 'https://image.tmdb.org/t/p/w500';

  const {
    title,
    release_date,
    vote_average,
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
              width="350px"
              src={
                poster_path
                  ? `${posterPath}${poster_path}`
                  : `${defaultNoImages} }`
              }
              alt={original_title}
            />
          </div>

          <ContMovieDetails>
            <UserCont>
              <Title>
                <b>{title}</b>
              </Title>
              <ReleaseText></ReleaseText>
            </UserCont>

            <UserCont>
              <NameDetailsMovie>Release Date:</NameDetailsMovie>
              <TextOverview>
                {dayjs(release_date).format('D | MM | YYYY')}
              </TextOverview>
            </UserCont>

            <NameDetailsMovie>
              <b>Overview:</b>
            </NameDetailsMovie>
            <TextOverview>{overview}</TextOverview>
            <TextOverview>
              {overview.length === 0 && (
                <MessageNoComments>
                  ❌ Sorry, we didn't find any oveview
                </MessageNoComments>
              )}
            </TextOverview>

            <UserCont>
              <NameDetailsMovie>User score:</NameDetailsMovie>
              <TextOverview>
                {Math.ceil(vote_average)} (average vote)
              </TextOverview>
            </UserCont>

            <UserCont>
              <NameDetailsMovie>
                <b>Genres:</b>
              </NameDetailsMovie>

              <TextOverview>
                {genres.map(({ name }) => name).join(' | ')}
              </TextOverview>
            </UserCont>

            <List>
              <div>
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
              <TbArrowBigLeftLine
                size={50}
                style={{
                  position: 'fixed',
                  top: '193px',
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
