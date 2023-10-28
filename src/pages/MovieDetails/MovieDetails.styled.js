import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 7px;
  gap: 11px;
  align-items: flex-start;
  margin-top: 69px;
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
  color: black;

  &:hover {
    color: red;
  }
  //
`;
export const ActorsFilms = styled.li`
  display: flex;
`;

export const AddInfo = styled.div`
  position: relative;
  top: 100px;
  right: 300px;
`;

export const TextOverview = styled.p`
  margin-right: 206px;
`;
