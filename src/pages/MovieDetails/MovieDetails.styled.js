import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 32px;
  gap: 11px;
  align-items: flex-start;
  margin-top: 100px;

  @media (max-width: 1220px) {
    margin-top: 201px;
    margin-left: -218px;
    display: flex;
    flex-direction: column;
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
  font-family: 'Marck Script';

  &:hover {
    transform: scale(1, 2);
    transition: transform 350ms;
  }
`;
export const ActorsFilms = styled.li`
  display: flex;
`;

export const TextOverview = styled.p`
  max-width: 227px;
  color: red;
  font-family: 'Marck Script';
  font-size: 18px;
`;

export const ButtonLink = styled.li`
  position: fixed;
  left: 19px;
  font-weight: 500;
  font-size: 22px;
  color: yellowgreen;
  cursor: pointer;
  list-style-type: none;
  top: 135px;

  @media (max-width: 540px) {
    top: 139px;
  }

  &:hover {
    color: red;
  }
`;

export const ContMovieDetails = styled.div`
  margin-top: -2px;
`;

export const NameFilms = styled.h2`
  color: red;
`;

export const NameDetailsMovie = styled.h3`
  color: red;
  font-size: 15px;
  font-family: 'Marck Script';
  font-size: 20px;
`;

export const UserCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -22px;
`;

export const ReleaseText = styled.p`
  font-size: 25px;
  color: red;
`;

export const Title = styled.h1`
  color: red;
  margin-top: -81px;
  margin-left: -414px;
  font-size: 35px;
  max-width: 600px;
  font-family: 'Courgette';

  @media (max-width: 1220px) {
    margin-top: 52px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const UnknownData = styled.p`
  color: red;
  margin-top: -45px;
  margin-left: 373px;
  font-family: 'Courgette';
`;

export const Img = styled.img`
  border: thick double red;
  border-color: yellowgreen;
`;
