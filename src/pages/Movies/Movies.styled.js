import styled from 'styled-components';

export const NotFilms = styled.p`
  margin-top: -28px;
  margin-left: -282px;
  color: red;
  font-family: 'Courgette';

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
