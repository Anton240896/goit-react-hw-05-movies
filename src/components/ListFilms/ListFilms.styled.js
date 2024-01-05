import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 94px;
  gap: 10px;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;

export const NameFilms = styled.p`
  position: absolute;
  font-size: 15px;
  background-color: var(--tmdbNameTitle);
  color: white;
  text-align: center;
  margin-left: 7px;
  margin-top: 5px;
  font-family: 'Courgette';

  @media (min-width: 122px) {
    width: 87px;
    font-size: 10px;
  }

  @media (min-width: 1288px) {
    width: 106px;
    font-weight: 500;
  }
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;

  &:hover {
    transform: scale(0.9);
    transition: transform 850ms;

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
