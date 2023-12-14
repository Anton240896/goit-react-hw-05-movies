import styled from 'styled-components';

export const NotFilms = styled.p`
  margin-top: -28px;
  margin-left: -282px;
  color: red;

  @media (max-width: 1220px) {
    margin-left: -218px;
  }
`;

export const ButtonLink = styled.button`
  position: fixed;
  &:hover {
    color: red;
  }
`;

export const ButtonLoadMore = styled.button`
  width: 70px;
  height: 50px;
  color: red;
`;
