import styled from 'styled-components';

export const ListFilms = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 172px;
  margin-left: -772px;
  gap: 10px;

  @media (max-width: 1220px) {
    display: flex;
    margin-left: -122px;
    flex-wrap: wrap;
  }
`;

export const Name = styled.p`
  color: red;
  font-family: 'Marck Script';
  font-size: 25px;
  padding-right: 13px;
  padding-left: 13px;
`;

export const ListImage = styled.li`
  border: thick double yellowgreen;
  text-align: center;
`;

export const MessageNoActors = styled.p`
  color: red;
  margin-top: -148px;
  margin-left: -44px;
  font-family: 'Marck Script';
  font-size: 20px;
`;

export const NameActor = styled.p`
  font-size: 40px;
  color: red;
  font-family: 'Marck Script';
  padding-right: 13px;
  padding-left: 13px;
`;
