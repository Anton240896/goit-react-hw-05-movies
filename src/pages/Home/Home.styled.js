import styled from 'styled-components';

export const ContFilms = styled.div`
  margin-top: 70px;
  margin-left: 10px;

  @media (max-width: 1220px) {
    margin-top: 206px;
    margin-left: -260px;
  }
`;

export const Trending = styled.h1`
  margin-left: 250px;
  margin-top: 25px;
  color: red;
  font-family: 'Tangerine', cursive;
  width: 29ch;
  font-size: 50px;
  white-space: nowrap;
  overflow: hidden;
  animation: cursor 1s step-end infinite, printed_text 5s steps(30);

  @keyframes cursor {
    0% {
      border-color: red;
    }

    50% {
      border-color: transparent;
    }

    100% {
      border-color: white;
    }
  }

  @keyframes printed_text {
    from {
      width: 0;
    }
  }

  @media (max-width: 1220px) {
    margin-left: 58px;
  }
`;

export const Description = styled.div`
  margin-top: -14px;
  margin-left: -59px;
  color: red;
  font-size: 60px;
  font-family: 'Tangerine', cursive;
  font-weight: 700;
  transform: scale(0.75);
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;

  @media (max-width: 1220px) {
    margin-left: -17px;
    margin-top: 64px;
    font-size: 35px;
  }

  @keyframes tracking-in-expand {
    8% {
      letter-spacing: -3.5em;
      opacity: 0;
    }

    40% {
      opacity: 2.6;
    }

    100% {
      opacity: 1;
    }
  }

  & > span {
    font-size: 0px;
    opacity: 0;
    margin-left: -30px;
    position: absolute;
    font-weight: 300;
    box-shadow: 0px 60px 25px -20px rgba(0, 0, 0, 0.5);
  }

  & > span:nth-child(1) {
    animation: roll 4s linear infinite 0s;
  }

  & > span:nth-child(2) {
    animation: roll 4s linear infinite 1s;
    margin-left: 10px;
  }

  & > span:nth-child(3) {
    animation: roll 4s linear infinite 2s;
    margin-left: 10px;
  }

  & > span:nth-child(4) {
    animation: roll 4s linear infinite 2.9s;
    margin-left: 10px;
  }

  @keyframes roll {
    0% {
      font-size: 0px;
      opacity: 0;
      margin-left: -30px;
      margin-top: 0px;
      transform: rotate(-25deg);
    }
    3% {
      opacity: 1;
      transform: rotate(0deg);
    }
    5% {
      font-size: inherit;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
    }
    20% {
      font-size: inherit;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
      transform: rotate(0deg);
    }
    27% {
      font-size: 0px;
      opacity: 0.5;
      margin-left: 20px;
      margin-top: 100px;
    }
    100% {
      font-size: 0px;
      opacity: 0;
      margin-left: -30px;
      margin-top: 0px;
      transform: rotate(15deg);
    }
  }

  /* @keyframes roll2 {
    0% {
      font-size: 0px;
      opacity: 0;
      margin-left: -30px;
      margin-top: 0px;
      transform: rotate(-25deg);
    }
    3% {
      opacity: 1;
      transform: rotate(0deg);
    }
    5% {
      font-size: inherit;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
    }
    30% {
      font-size: inherit;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
      transform: rotate(0deg);
    }
    37% {
      font-size: 1500px;
      opacity: 0;
      margin-left: -1000px;
      margin-top: -800px;
    }
    100% {
      font-size: 0px;
      opacity: 0;
      margin-left: -30px;
      margin-top: 0px;
      transform: rotate(15deg);
    }
  } */
`;

export const Span = styled.span`
  padding-left: 10px;
`;
