import styled from 'styled-components';
// import { FaYoutube } from 'react-icons/fa';

export const ContTrailer = styled.div`
  margin-top: 21px;
  margin-left: -437px;
  margin-right: -269px;

  @media (max-width: 1220px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

export const Frame = styled.iframe`
  width: 417.5px;
  height: 100px;
  border: thick double var(--tmdbLightGreen);

  @media (max-width: 1220px) {
    width: 325px;
  }
`;
// export const BtnTrailer = styled(FaYoutube)`
//   cursor: pointer;
//   color: var(--tmdbRed);
// `;
