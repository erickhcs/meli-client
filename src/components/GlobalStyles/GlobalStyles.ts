import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #eeeeee;
    padding: 0;
    margin: 0;
    font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
