import styled from 'styled-components';

export const ListFilms = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 58px;
  margin-left: -772px;
  gap: 10px;

  @media (max-width: 1220px) {
    display: flex;
    margin-left: -85px;
    flex-wrap: wrap;
  }
`;

export const Name = styled.p`
  color: red;
  font-family: 'Marck Script';
  font-size: 25px;
  padding-right: 13px;
  padding-left: 13px;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;

export const ListImage = styled.li`
  border: thick double yellowgreen;
  text-align: center;
  margin-top: 71px;
`;

export const MessageNoActors = styled.p`
  color: red;
  margin-top: -41px;
  margin-left: -44px;
  font-family: 'Marck Script';
  font-size: 20px;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;

export const NameActor = styled.p`
  color: red;
  font-family: 'Marck Script';
  padding-right: 13px;
  padding-left: 13px;
  font-size: 45px;
  font-weight: 800;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;

export const ImgActor = styled.img`
  width: 300px;
  height: 400px;
`;
