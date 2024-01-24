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
    margin-left: -371px;
    display: flex;
    flex-direction: column;
  }
`;

export const List = styled.ul`
  gap: 12px;
  margin: 0;
  padding: 0;
`;

export const ListInfo = styled.li`
  list-style: none;
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
  color: var(--tmdbRed);
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
  color: var(--tmdbRed);
  max-width: 199px;
  font-family: 'Marck Script';
  font-size: 18px;
`;

export const ButtonLink = styled.li`
  position: fixed;
  left: 19px;
  font-weight: 500;
  font-size: 22px;
  color: var(--tmdbLightGreen);
  cursor: pointer;
  list-style-type: none;
  top: 135px;

  @media (max-width: 540px) {
    top: 348px;
  }

  &:hover {
    color: var(--tmdbRed);
  }
`;

export const ContMovieDetails = styled.div`
  margin-top: 120px;
`;

export const NameFilms = styled.h2`
  color: var(--tmdbRed);
`;

export const NameDetailsMovie = styled.h3`
  color: var(--tmdbRed);
  font-size: 15px;
  font-family: 'Marck Script';
  font-size: 20px;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;

export const UserCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -15px;
`;

export const Title = styled.h1`
  color: var(--tmdbRed);
  margin-top: -94px;
  margin-left: -440px;
  font-size: 44px;
  max-width: 600px;
  font-family: 'Courgette';
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;

  @media (max-width: 1220px) {
    margin-top: 52px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1)
      700ms both;
  }
`;

export const Img = styled.img`
  border: thick double var(--tmdbLightGreen);
  width: 417px;
  height: 789px;
  margin-top: 126px;

  @media (max-width: 1220px) {
    width: 266px;
    height: 386px;
  }
`;

export const NameDescription = styled.p`
  color: var(--tmdbRed);
  font-size: 17px;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;

  @media (max-width: 1220px) {
    width: 361px;
  }
`;
