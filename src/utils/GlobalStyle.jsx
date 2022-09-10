import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{box-sizing: border-box;}
  body {
    margin: 0;
    padding: 0;
    background-color: #F4F4F4;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    ul,ol{
      padding: 0;
      margin: 0;
      list-style: none;
  }
  p{
    margin: 0;
  }
`;
