import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 7px;
  gap: 11px;
  align-items: flex-start;
  margin-top: 113px;
  @media (max-width: 922px) {
    margin-top: 131px;
    margin-left: -306px;
  }
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
  font-weight: 400;
  font-size: 18px;
  color: red;
`;
export const ActorsFilms = styled.li`
  display: flex;
`;

export const TextOverview = styled.p`
  max-width: 287px;
  color: red;
`;

export const ButtonLink = styled.li`
  position: absolute;
  top: 40px;
  left: 19px;
  font-weight: 500;
  font-size: 22px;
  color: yellowgreen;
  cursor: pointer;
  list-style-type: none;

  &:hover {
    color: red;
  }
`;

export const ContMovieDetails = styled.div`
  margin-top: -18px;
`;

export const NameFilms = styled.h2`
  color: red;
`;

export const NameDetailsMovie = styled.h3`
  color: red;
`;

export const UserCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
