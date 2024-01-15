import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const NoFilms = styled.p`
  margin-top: 2px;
  margin-left: -282px;
  color: var(--tmdbRed);
  font-family: 'Courgette';
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 500ms
    both;

  @media (max-width: 1220px) {
    margin-left: -218px;
  }

  @keyframes tracking-in-expand {
    8% {
      letter-spacing: -0.5em;
      opacity: 0;
    }

    40% {
      opacity: 0.6;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const ButtonLink = styled.button`
  position: fixed;
  &:hover {
    color: var(--tmdbRed);
  }
`;

export const Search = styled(IoSearch)`
  position: relative;
  top: 160px;
  right: 319px;
  color: var(--tmdbDarkGrey);

  &:focus {
    color: var(--tmdbLightBlue);
  }

  @media (max-width: 1220px) {
    position: relative;
    top: 280px;
    right: 212px;
  }
`;
