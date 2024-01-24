import styled from 'styled-components';
// import { FaYoutube } from 'react-icons/fa';

export const ContTrailer = styled.div`
  position: relative;
  top: 19px;

  @media (max-width: 1220px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

export const Frame = styled.iframe`
  width: 205px;
  height: 106px;
  border: thick double var(--tmdbLightGreen);
  border-radius: 10px;

  @media (max-width: 1220px) {
    width: 273px;
  }
`;
// export const BtnTrailer = styled(FaYoutube)`
//   cursor: pointer;
//   color: var(--tmdbRed);
// `;
