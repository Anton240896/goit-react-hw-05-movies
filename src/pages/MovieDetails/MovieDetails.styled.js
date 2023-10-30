import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 7px;
  gap: 11px;
  align-items: flex-start;
  margin-top: 70px;
`;

export const List = styled.ul`
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: red;
`;
export const ActorsFilms = styled.li`
  display: flex;
`;

export const TextOverview = styled.p`
  max-width: 406px;
  color: red;
`;

export const ButtonLink = styled.li`
  position: absolute;
  top: 54px;
  left: 19px;
  font-weight: 500;
  font-size: 22px;
  color: white;
  border: none;
  cursor: pointer;
  list-style: none;

  &:hover {
    color: red;
  }
`;

export const LinkActors = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: red;
`;

export const ContMovieDetails = styled.div`
  margin-top: -18px;
`;

export const NameDetails = styled.p`
  color: red;
`;
