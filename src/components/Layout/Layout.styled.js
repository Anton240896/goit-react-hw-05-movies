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
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid #414141;
  background-color: white;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    left: 0.2em;
    bottom: 0.2em;
    background-color: black;
    border-radius: inherit;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

export const LabelSwitch = styled.label`
  font-size: 17px;
  position: absolute;
  top: 52px;
  left: 150px;
  width: 3.5em;
  height: 2em;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
      border: 2px solid #0974f1;
    }
    &:checked + ${Slider}:before {
      transform: translateX(1.5em);
    }
  }
`;
