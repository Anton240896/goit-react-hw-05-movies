import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const FormContainer = styled.form`
  display: flex;
  margin-top: 238px;
  margin-left: -219px;

  @media (min-width: 1220px) {
    margin-top: 119px;
    margin-left: -327px;
  }
`;

export const Input = styled.input`
  padding: 7px 44px;
  border: 2px solid var(--tmdbDarkGrey);
  font-weight: 600;
  font-size: 20px;
  margin-top: 24px;
  margin-left: -46px;
  margin-right: 10px;
  border-radius: 4px 8px;
  outline: none;

  @media (max-width: 1220px) {
    padding: 7px 35px;
    margin-top: 42px;
    margin-left: -21px;
  }

  &::placeholder {
    font-family: 'Courgette';
  }

  &:hover {
    color: var(--tmdbLightBlue);
    border: 2px solid var(--tmdbLightBlue);
  }

  &:focus {
    color: var(--tmdbLightBlue);
  }
`;

export const Search = styled(IoSearch)`
  scale: 1.5;

  &:hover {
    color: var(--tmdbLightBlue);
  }

  &:focus {
    color: var(--tmdbLightBlue);
  }
`;

export const BtnSearch = styled.button`
  position: relative;
  top: 29px;
  left: -14px;
  background-color: var(--tmdbWhite);
  border: none;
  width: 24px;
  height: 32px;
  color: var(--tmdbDarkGrey);
  cursor: pointer;

  @media (max-width: 1220px) {
    position: relative;
    top: 46px;
    left: 9px;
  }
`;
