import { useLocation } from 'react-router-dom';
import { List, Item, MovieLink } from './ListFilms.styled';

const ListFilms = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default ListFilms;
