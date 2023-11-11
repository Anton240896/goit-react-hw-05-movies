import styled from 'styled-components';

export const ListFilms = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 172px;
  margin-left: -700px;
  gap: 10px;

  @media (max-width: 922px) {
    display: flex;
    margin-left: -145px;
    flex-wrap: wrap;
  }
`;

export const Name = styled.p`
  color: red;
`;

export const ListImage = styled.li`
  border: 2px solid gray;
  text-align: center;
`;
