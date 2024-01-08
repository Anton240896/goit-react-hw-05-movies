import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --tmdbLightBlue: rgb(1,180,228);
  --tmdbLightGreen: rgb(30,213,169);
  --tmdbNameTitle: rgb(30 213 169 / 49%);
  --tmdbRed: red;
  --tmdbDarkGrey: darkgrey; 
}

body {

  margin: 0;
background-image: radial-gradient(circle, #dbdbe3 60%, rgb(0, 0, 0)75%);
 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
