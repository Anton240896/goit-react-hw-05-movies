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
  font-size: 15px;
  background-color: #ff000096;
  color: white;
  font-weight: 500;
  margin-left: 6px;
  margin-top: 5px;

  @media (min-width: 122px) {
    width: 138px;
    font-size: 10px;
  }

  @media (min-width: 1288px) {
    width: 138px;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;

  &:hover {
    transform: rotate(5deg);
    transition: transform 550ms;

    & ${NameFilms} {
      display: none;
    }
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #191d1e;

  &:hover {
    color: #ffffff;
  }
`;
