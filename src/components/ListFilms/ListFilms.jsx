import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { List, Item, MovieLink, NameFilms } from './ListFilms.styled';

/*   ====== DESTRUCTURIZATION  ======*/
const defaultImg =
  'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
const posterFilms = 'https://image.tmdb.org/t/p/w500';

/*   ====== HOOKS ======*/
const ListFilms = ({ films }) => {
  const location = useLocation();

  /*   ====== RENDER ======*/
  return (
    <section>
      <List>
        {films.map(({ id, title, poster_path, release_date }) => (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <NameFilms>
                {title} ({dayjs(release_date).format('DD. MM. YYYY')})
              </NameFilms>
              <img
                src={poster_path ? `${posterFilms}${poster_path}` : defaultImg}
                alt={title}
                width="120px"
                height="180px"
              />
            </MovieLink>
          </Item>
        ))}
      </List>
    </section>
  );
};

export default ListFilms;
