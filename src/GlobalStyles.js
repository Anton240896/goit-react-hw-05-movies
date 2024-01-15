import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --tmdbLightBlue: rgb(1,180,228);
  --tmdbLightGreen: rgb(30,213,169);
  --tmdbNameTitle: #031d33b5;
  --tmdbRed: red;
  --tmdbDarkGrey: darkgrey; 
  --tmdbWhite: white;
  --tmdbBlack: black;
  --tmdbShadowSwitcher: #dbdbe3;
  --tmdbDarkBlue: #031d33;
}

body {
  margin: 0;
  background-image: radial-gradient(circle, #dbdbe3 50%, rgb(0, 0, 0)75%);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


`;
