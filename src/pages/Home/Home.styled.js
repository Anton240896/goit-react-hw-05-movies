import styled from 'styled-components';

export const ContFilms = styled.div`
  margin-top: 70px;
  margin-left: 10px;

  @media (max-width: 1220px) {
    margin-top: 206px;
    margin-left: -260px;
  }
`;

export const Trending = styled.h1`
  margin-left: 326px;
  margin-top: -25px;
  color: red;
  font-family: 'Marck Script';

  @media (max-width: 1220px) {
    margin-left: 58px;
  }
`;

export const Description = styled.p`
  margin-top: -14px;
  margin-left: 40px;
  color: red;
  font-size: 50px;
  font-family: 'Marck Script';

  @media (max-width: 1220px) {
    margin-left: 53px;
  }
`;
