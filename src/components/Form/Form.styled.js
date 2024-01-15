import styled from 'styled-components';

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
  padding: 7px 15px;
  border: 2px solid var(--tmdbDarkGrey);
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 4px 8px;
  outline: none;

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
