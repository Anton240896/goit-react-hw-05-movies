import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const NameFilms = styled.p`
  position: absolute;
  width: 10%;
  font-size: 20px;
  color: white;
  font-weight: 500;
  margin-left: 6px;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #ff000096;
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.03);
    transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

    & ${NameFilms} {
      display: none;
    }
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #191d1e;

  &:hover {
    color: red;
  }
`;
