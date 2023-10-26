import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 7px;

  gap: 11px;
`;

export const List = styled.ul`
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #191d1e;

  &:hover {
    color: red;
  }
  //
`;

// export const Button = styled.button`
//   padding: 8px 8px;
//   cursor: pointer;
//   border-radius: 4px;
//   border: 3px solid #191d1e;
//   color: #191d1e;
//   font-weight: 600;
//   font-size: 20px;
//   border-radius: 4px 8px;

//   &:hover {
//     color: red;
//     border: 3px solid red;
//   }
// `;
