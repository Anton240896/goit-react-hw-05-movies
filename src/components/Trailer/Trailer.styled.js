import styled from 'styled-components';
// import { FaYoutube } from 'react-icons/fa';

export const ContTrailer = styled.div`
  position: relative;
  top: 40px;
  left: -390px;

  @media (max-width: 1220px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

export const Frame = styled.iframe`
  width: 320px;
  height: 100px;
  border: thick double var(--tmdbLightGreen);
  border-radius: 10px;

  @media (max-width: 1220px) {
    width: 325px;
  }
`;
// export const BtnTrailer = styled(FaYoutube)`
//   cursor: pointer;
//   color: var(--tmdbRed);
// `;
