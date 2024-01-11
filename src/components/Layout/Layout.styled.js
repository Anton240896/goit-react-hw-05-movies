import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 55px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  margin-left: 248px;
  margin-top: 44px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  font-family: 'Tangerine', cursive;
  color: var(--tmdbRed);
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  overflow: hidden;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;

  &:hover {
    color: var(--tmdbLightGreen);
  }

  &.active {
    color: var(--tmdbLightGreen);
    border: thick double var(--tmdbLightGreen);
  }
`;
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid var(--tmdbLightGreen);
  background-color: var(--tmdBlack);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    left: 0.2em;
    bottom: 0.2em;
    background-color: #dbdbe3;
    border-radius: inherit;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

export const LabelSwitch = styled.label`
  font-size: 17px;
  position: absolute;
  top: 55px;
  left: 297px;
  width: 3.5em;
  height: 2em;

  @media (max-width: 1748px) {
    left: 16px;
    top: 50px;
    max-width: 670px;
  }

  @media (max-width: 514px) {
    left: 16px;
    top: 112px;
    max-width: 670px;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
      border: 2px solid var(--tmdbRed);
      background-color: var(--tmdbShadowSwitcher);
    }
    &:checked + ${Slider}:before {
      transform: translateX(1.5em);
      background-color: var(--tmdbBlack);
    }
  }
`;

export const LinkMovie = styled.a`
  color: var(--tmdbRed);

  @media (max-width: 1220px) {
    display: none;
  }

  &:hover {
    color: var(--tmdbLightBlue);
    transition: color 0.5s ease-in-out;
  }
`;

export const LinkFace = styled.a`
  color: var(--tmdbRed);
  display: inline-block;
  cursor: pointer;
  margin-left: -147px;

  @media (max-width: 1220px) {
    margin-left: 250px;
  }

  &:hover {
    color: var(--tmdbLightGreen);
    transition: color 0.5s ease-in-out;
  }
`;

export const LinkWiki = styled.a`
  color: var(--tmdbRed);
  margin-left: 10px;

  &:hover {
    color: var(--tmdbLightGreen);
    transition: color 0.5s ease-in-out;
  }
`;

export const LinkLnkdn = styled.a`
  color: var(--tmdbRed);
  margin-left: 10px;

  &:hover {
    color: var(--tmdbLightGreen);
    transition: color 0.5s ease-in-out;
  }
`;

export const ButtonRegistration = styled.button`
  position: absolute;
  top: -149px;
  left: 22px;
  background-color: var(--tmdbRed);
  width: 102px;
  height: 37px;
  border-radius: 29px;
  border: none;
  color: var(--tmdbWhite);
  cursor: pointer;
  font-size: 8px;
  transform: scale(1.9);

  @media (max-width: 1220px) {
    position: absolute;
    top: -388px;
    left: 377px;
    background-color: var(--tmdbLightGreen);
    transition: background-color 0.5s ease-in-out;
    width: 136px;
    height: 31px;
    border-radius: 8px;
    border: none;
    color: var(--tmdbWhite);
    cursor: pointer;
    font-size: 10px;
    transform: scale(1.3);
  }

  &:hover {
    background-color: var(--tmdbWhite);
    transition: background-color 850ms;
    color: var(--tmdbLightBlue);
    border: 2px solid red;
  }
`;

export const LinkRegistration = styled.a`
  position: absolute;
  margin-left: -314px;
  margin-top: 413px;
`;

export const ButtonListOfActors = styled.button`
  background-color: var(--tmdbLightGreen);
  position: absolute;
  top: -92px;
  transition: background-color 0.5s ease-in-out;
  width: 172px;
  height: 46px;
  border-radius: 5px;
  border: none;
  color: var(--tmdbWhite);
  cursor: pointer;
  font-size: 14px;
  margin-left: -18px;

  @media (max-width: 1220px) {
    position: absolute;
    top: -433px;
    left: 395px;
    width: 136px;
    height: 31px;
    border-radius: 8px;
    border: none;
    color: var(--tmdbWhite);
    cursor: pointer;
    font-size: 10px;
    transform: scale(1.3);
  }

  &:hover {
    background-color: var(--tmdbWhite);
    border: 2px solid var(--tmdbLightGreen);
    color: var(--tmdbLightBlue);
    transition: color 0.5s ease-in-out;
    transform: scale(0.9);
    transition: transform 850ms;
  }
`;

export const BtnLogin = styled.button`
  position: absolute;
  margin-left: 400px;
  top: 203px;
  color: var(--tmdbWhite);
  background-color: red;
  border: none;
  width: 71px;
  height: 37px;
  border-radius: 29px;
  cursor: pointer;
  font-size: 7px;
  transform: scale(1.9);

  &:hover {
    background-color: var(--tmdbWhite);
    transition: background-color 850ms;
    color: var(--tmdbLightBlue);
    border: 2px solid var(--tmdbRed);
  }

  @media (max-width: 1220px) {
    margin-left: 452px;
    margin-top: -9px;
    background-color: var(--tmdbLightGreen);
    transition: background-color 0.5s ease-in-out;
    width: 136px;
    height: 31px;
    border-radius: 8px;
    color: var(--tmdbWhite);
    cursor: pointer;
    font-size: 10px;
    transform: scale(1.3);
  }
`;

export const BtnTop = styled.button`
  position: absolute;
  margin-left: 245px;
  top: 278px;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 68px;
  cursor: pointer;
  background-color: var(--tmdbRed);
  color: var(--tmdbWhite);

  &:hover {
    background-color: var(--tmdbWhite);
    transition: background-color 850ms;
    color: var(--tmdbLightBlue);
    border: 2px solid var(--tmdbRed);
  }

  @media (max-width: 1220px) {
    display: none;
  }
`;
