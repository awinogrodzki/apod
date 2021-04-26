import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
  }

  html {
    color: #333;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`