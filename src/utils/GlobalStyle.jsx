import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{box-sizing: border-box;}
  body {
    margin: 0;
    padding: 0;
    
    }
    a{
      text-decoration: none;
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
