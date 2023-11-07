import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 55px;
`;

export const Nav = styled.nav`
  border-bottom: solid 2px red;
  margin-bottom: 20px;
  padding-bottom: 10px;
  margin-left: 273px;
  margin-top: 44px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: red;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  overflow: hidden;

  &:hover {
    color: yellowgreen;
  }

  &.active {
    color: yellowgreen;
    border: thick double yellowgreen;
  }
`;

export const ToggleContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnToggle = styled.div`
  position: absolute;
  top: 4px;
  left: 3px;
  background-color: black;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
`;

export const BtnSwitch = styled.div`
  position: absolute;
  margin-bottom: 92px;
  margin-right: 714px;
  height: 30px;
  width: 55px;
  border-radius: 250px;
  background-color: white;
  transition: 0.5s;

  &.active {
    background: black;

    ${BtnToggle} {
      left: 30px;
      background-color: white;
    }
  }
`;
