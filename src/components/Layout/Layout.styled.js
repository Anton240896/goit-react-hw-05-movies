import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

export const Nav = styled.nav`
  border-bottom: solid 2px red;
  margin-bottom: 20px;
  margin-left: 287px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: red;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  overflow: hidden;

  &:hover {
    color: white;
  }

  &.active {
    color: yellowgreen;
  }
`;
