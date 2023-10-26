import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 260px;
`;

export const Nav = styled.nav`
  border-bottom: solid 2px yellowgreen;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 22px;
  margin-left: 86px;
  font-weight: 500;
  font-size: 22px;
  color: #191d1e;

  &:hover {
    color: yellowgreen;
  }
`;
