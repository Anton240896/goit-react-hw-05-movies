import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  margin-top: 238px;
  margin-left: -219px;

  @media (min-width: 1200px) {
    margin-top: 119px;
    margin-left: -327px;
  }
`;

export const Input = styled.input`
  padding: 10px 15px;
  border: 2px solid #191d1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 4px 8px;
  outline: none;

  &:hover {
    color: yellowgreen;
    border: 2px solid yellowgreen;
  }
`;
