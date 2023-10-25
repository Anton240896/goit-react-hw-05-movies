import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 1px darkgreen;
  margin-bottom: 15px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 22px;
  color: #191d1e;

  &:hover {
    color: yellowgreen;
  }
`;
