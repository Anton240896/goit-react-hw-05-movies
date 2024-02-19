import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa';
import ReactModal from 'react-modal';

export const OverlayModal = styled(ReactModal)`
  position: relative;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 0%;
  z-index: 1000;

  @media(max-width: 1220px) {
    margin-left: -136px;
  }
`;

export const ContTrailer = styled.div`
  position: relative;
  top: -2px;

  @media (max-width: 1220px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

export const Frame = styled.iframe`
  margin-left: 520px;
  width: 50%;
  height: 500px;
  border: thick double var(--tmdbLightGreen);
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  @media (max-width: 1220px) {
    width: 273px;
  }
`;

 export const BtnTrailer = styled(FaYoutube)`
   cursor: pointer;
   color: var(--tmdbRed);
 `;