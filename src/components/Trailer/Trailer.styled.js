import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa';

export const ContTrailer = styled.div`
  margin-top: 23px;
  margin-right: -269px;
  color: var(--tmdbRed);

  @media (max-width: 1220px) {
  }

  &:hover {
  }
`;

export const BtnTrailer = styled(FaYoutube)`
  cursor: pointer;
  color: var(--tmdbRed);
`;
