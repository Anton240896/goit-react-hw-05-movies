import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  border-bottom: solid 2px red;
  margin-bottom: 20px;
  margin-left: 32px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 22px;
  margin-left: 86px;
  font-weight: 500;
  font-size: 22px;
  color: red;

  &:hover {
    border: red;
    color: white;
  }
`;
