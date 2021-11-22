import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #141414;
  }

  html {
    scroll-behavior: smooth;

  }
  button{
    background-color: transparent;
    border: none;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  #root{
    background-color: #141414;
    min-height: 100vh;
  }

`;

export default GlobalStyles;
