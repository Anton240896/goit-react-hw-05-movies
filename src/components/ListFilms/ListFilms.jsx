import { useLocation } from 'react-router-dom';
import { List, Item, MovieLink, NameFilms } from './ListFilms.styled';

const defaultImg =
  'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
const posterPath = 'https://image.tmdb.org/t/p/w500';

const ListFilms = ({ films }) => {
  const location = useLocation();

  return (
    <section>
      <List>
        {films.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <NameFilms> {title}</NameFilms>
              <img
                src={poster_path ? `${posterPath}${poster_path}` : defaultImg}
                alt={title}
                width="150px"
                height="220px"
              />
            </MovieLink>
          </Item>
        ))}
      </List>
    </section>
  );
};

export default ListFilms;
